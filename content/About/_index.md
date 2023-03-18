## Motivation


The purpose of this application is to help bounty hunters perform scans more efficiently,
freeing up more time to focus on finding vulnerabilities and earning rewards.

With this platform, you can spend less time figuring out how to perform scans
and more time hunting for bounties.

### Problem statement

As a bug bounty hunter, I've found that keeping track of my scans, knowing when
and how they were performed, and combining them with other tools can be increasingly
difficult as the number of targets I'm working on grows.

It's also a challenge to back up all my saved scans (including subdomains, etc.) in case
I need to reinstall my system. Additionally, running commands on a schedule and receiving
notifications about new subdomains and content changes requires slight modifications for each target.

I believe a generalized automation system, specifically designed for bug bounty hunting, would help
to streamline and organize these tasks.

My proposed solution would make it easy to keep track of when and how scans were performed,
combine scans with other tools, and back up all saved scans. It would also simplify running commands
on a schedule and receiving notifications about new subdomains and content changes.

Unlike other automation systems, my solution would be tailored to the unique needs of bug bounty
hunters and require no programming skills or a git repository to use.

### Solution

This platform should be easy to use, and should contain functionalities to help
with hacking multiple targets. If you are hacking on the side, the issue with
maintaining everything you did becomes increasingly difficult.

Essentially, what most of us need is a way to quickly access previous scans; have
them running on schedule, or on-demand; have a way to combine multiple scans and
pipe them to another group of scans that you'd like to perform (`subdomains | portscan`);
have some resource links readily available so you can quickly go to them while doing your hunting.

So I came up with this app. Features it contains are:

- Separate multiple targets by projects. Each target is a separate project
  to me
- Have quick links that I can easily click to. For example [GTFOBins](https://gtfobins.github.io/), [HackTricks](https://book.hacktricks.xyz/welcome/readme), ...
- Separate workflow command groups, which are parts of my scans (subdomain
  discovery, port scanning, ...)
- For each group, have multiple commands. Each of them executing on its own
  schedule
- Have ability to chain groups. For example, nmap's input should be output
  of subdomain discovery group scan
- Save on-demand commands that can be executed on manual run. Don't need to
  search my bash or zsh history for them
- Have links per project. I wanted to have quick lookup at for example
  project link on bug bounty platform
- Deactivate project. Sometimes, you want to pause your scans without losing
  the data.
- Have all scans on the server, so when I re-install the system, they are always
  there
- Notify me about the diff (currently only Slack)

## Development

Currently, application is closed-source and in alpha stage. The application is
going to be developed further based on the feedback and issues that you would
have while using it.

### Tech stack

The application is written i [Go](https://go.dev/), [Rust](https://www.rust-lang.org/)
and [Quasar(Vue)](https://quasar.dev/).

The database used for this app at this time is [PostgreSQL](https://www.postgresql.org/).

For static websites (like the docs itself), the
[Hugo](https://gohugo.io/) is used.

### Current decisions

There are many outstanding applications that are excelling in their respective fields.
Specifically for note-taking, there are numerous remarkable applications available for free use.

For that reason, trying not to re-invent the wheel, the resource links should
serve as an aggregator for all of them, so you can quickly access any resource
while you hunt for bugs.

That does not mean that none of them will be included as a feature in the
future. It just means that the effort of developing them is not something that
should be done at this stage.

### Decision process

Implementing some features may take longer than expected. Depending on the feature,
there may be some delay in its implementation. Please be patient and I'll do my best
to address all of the requested features as efficiently as possible.

Also, the feature should benefit many others. This is not built for a single
user so some proposals might get temporarily rejected.
