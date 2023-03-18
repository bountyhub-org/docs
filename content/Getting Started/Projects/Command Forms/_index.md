# Command Structure

Each command is executed in order:

- Before command
- Main command
- After command

## Limitation

### The bash -c prefix
Each command is executed with prefix `bash -c`

The reason is that I could not see a good reason why not to leverage a bash
command splitting. If required in the future, we can extend the runners
behaviour to accept the command execution prefix or custom executors. For now,
this was enough

Each command passes through strip space.

### The `stdin`

Each command can be connected to the `stdin` based on the configuration. See the
[Before Command](#before-command) section for more information.

### The `stdout` and `stderr`

Both the `stdout` and the `stderr` are streamed only for the main command. You
should not perform any logic that you'd need as the output in your `before
command` and `after command` spec.


### Tooling

Tools are required to be installed on your machine. The runner does not come
with built-in tools. See more in the runner section.

## Before Command

This type of command is used to prepare your environment. It is not required to
provide it. Each command is connected to the stdin, but that might not be ideal
in every case. For that reason, you can run a `before command` to prepare your
environment for command execution.

Example:

Let's say that we want the output of the Workflow Command Group to be used for
nmap. One way that you can do it is to provide `-iL` flag to the nmap. But `-iL`
expects the file, and not the stdin. That is where this becomes useful.

You can specify the before command to be:

```bash
cat > subdomains.txt
```

Cat is connected to the `stdin`, so we cat the `stdin` into the file `subdomains.txt`

Now, you can use:

```bash
nmap -iL subdomains.txt
```

## The Main Command

This is the core of your workflow. The input is required.

The output of this command is streamed to the server and that is the result of
your scan. Command can have up to 1024 characters now. If that is not
acceptable, please submit an issue and we can extend it.

## The After Command

Command used for cleaning up your environment. For example, if you created a
file, you can remove it at this stage.

```bash
rm subdomains.txt
```


# Grep

The grep is used when combining outputs. That is useful if you want to have
extended output (like amass can provide), but you want to extract subdomains for
the Workflow Command Group combine process.

If left empty, no grep will be performed line-wise.

Keep in mind, grep right now does not have capture groups. If needed in the
future, they can be added. For example, amass output line that looks like this:

```
[DNS]             bountyhub.org
```


On the server side, something similar to this would be executed:

```go
func main() {
        // Executed only if grep is not empty

	r := regexp.MustCompile(`.*\s(\w+\.\w+)$`) // your grep string
	submatches := r.FindStringSubmatch(`[DNS]             bountyhub.org`) // line based iterator

        // We are looking at capture group $1,
        // [0] - the entire thing
        // [1] - capture group 1
	if len(submatches) < 2 {
		return
	}

	fmt.Printf("%s\n", submatches[1])
}
```


Which will produce:

```
bountyhub.org
```

Feel free to use this snippet in [The Go Playground](https://go.dev/play/).

# The stdin connections

There are 3 ways that you can pass the `stdin`.

- No stdin: Nothing will be connected as the `stdin`.
- Use custom stdin: You will have a text based drop-down to provide custom
  input.
- Use workflow command group output as stdin: Connect output (passed through
  grep) of the Workflow Command Group as the `stdin` of your command.


# Combining outputs

All tool outputs are combined on the fly based on the latest command executions.

What will essentially be done is:

1. Take the workflow command group
2. Take all workflow commands associated with the workflow command group
3. Take all scans that have the same:
    1. Workflow command name
    2. Workflow command
    3. Workflow command group name
4. Take the `stdout` of each latest scan for its type
5. For each line, pass it to grep if grep is specified
6. Add each line (either extracted from grep or the entire line) to the set.
7. Combine set output with `\n`

With that in mind, you might see some strange output especially running commands
that are outputting stuff not in a line-based section, such as `nmap` default
output.
