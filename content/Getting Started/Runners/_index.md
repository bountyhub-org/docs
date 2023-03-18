# Overview

The runner is basically a worker (similar to the CI/CD) runner, used to execute
your commands. They do not have any complicated logic by themselves. They are
just an automated machine executing commands you have specified.


# Registration

To register your runner, you first need to create one on your profile page.

The name must be:

- Handle like (For example: main-runner)
- Unique per account.

Once created, you will be prompted with the configuration command that you
should run on your server where you have the runner binary.

```bash
./runner --token=TOKEN --url=URL
```

When you execute that command, your runner, the runner will:

- Register itself with the server.
- Save the token in a file called `.registration` in the `pwd`.
  Keep in mind, you should always start the
  runner from the directory where the runner binary is located.
- Start listening for jobs right away.

## Runner exists

If you runner exists for some reason (maybe network failure, a bug or
something), you can easily run it again just by executing the binary
with no flags.

```bash
./runner
```

No flags signals the runner to use configuration from the file-system. **Please do
not share that configuration with anyone**. The runner itself does not have
permissions to do anything except for asking for a job and picking it up. But if
your workflow contains any secrets, that might be an issue. So, please, keep it
secure.

## Runner automatic cleanup

Runner session token will expire after 7 days. During its work, the runner will
periodically try to refresh the token to avoid being unauthorized.

But if the runner goes offline for ~7days, the token will be invalidated on the
server and the runner will exit.

To start it again, you would need to re-configure the runner.

Also, at this point, there is no tracking of how long the runner has been
online, the last message etc. Everything is based on the `Bearer` token sent
from the runner. So the automatic cleanup of runners from the database does not
exist at this time.

## Re-configuring the runner

If runner session expires without refresh, the runner won't be able to start
again. To fix this issue, just remove this runner from your UI, and create
another one.

You will be prompted with the new one-time token and the URL. You run the
command on the server and the runner will register itself again, and start
working.

# Execution

Runner periodically asks for job. Currently, the polling is used.

Once the command lands on the runner, it is going to be executed in order:

- Before Command
- Main Command
- After Command

More about that you can see in the [Command Forms section](/Getting-Started/Projects/Command-Forms/).

Each command is executed using `bash -c {arg}`. I could not see any reason why
not to leverage bash to do the command splitting. That is usually the well
understood way to run your command.

Custom executors can be added in the future. I did not see any
particular reason why not to leverage bash since it is installed in most
systems.

## Tooling

You have to have tools installed on your runner for it to be executed properly.

If you have some proprietary tooling, you should be able to execute them. For
that reason, you have a complete freedom how to organize your environment. The
platform is unaware of the tools that you are using. The string is saved and
passed to the `bash -c` to be executed. Then it is left to your system to run
it.

# Limitations

- Currently, the runner does not support self-updates. That is going to be an
  important feature to be added, but right now, changes to the workflow command
  are not expected so based on the requirement changes, the feature will be added.

- Diagnostics logs are missing. Because of that, it is going to be harder to
  debug if anything goes wrong. If you are submitting an issue, please make sure
  it is reproducible.
