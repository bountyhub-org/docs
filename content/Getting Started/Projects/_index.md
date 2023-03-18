# Overview

The project page can be found on the path `/{handle}/{project-name}`

Once you have created a project, you will be automatically redirected to that
page. There are multiple controls that you can use for you project.

## Scans

Home where all of your scans are located. Over there, you can see them separated
into `scheduled` ad `on-demand` scans.

Scheduled scans are associated with the `Workflow Commands` tab.
On-Demand scans are associated with the `On-Demand Commands` tab.

Each scan is particular execution of a scan executed by one of your runners.

Once scheduled, they are not tied up to any type of command. They are stand
alone so even if you delete a workflow command and at later point thought it was
useful, you can still see the scan output.

Each scan can be deleted manually by clicking on the delete button.

This is an example how it might look like:

<img src="/scan-example.png" />

Also, scheduling is lazy. On runner message, the platform will check if anything
should be scheduled and only then schedule the execution. So if your runner goes
off-line for a while, it does not perform many scans for no reason (they will
likely be the same).

Another reason is to lower the amount of load on the server. The platform does not have
any funding (nor do I want funding to grow it). Especially now in alpha version,
I wanted to make it as simple as it can be. If there is a need to see your
scheduled scans, let me know :).

## Workflow Command Groups

This tab describes multiple groups used for grouping scheduled commands. The
basic grouping would be for example `SubdomainDiscovery`, `PortScan`,
`ContentDiscovery`, etc. The name does not have to be a single word, although it
looks nicer in the UI so that is the preferred way to do it.

Next to each workflow command group, you can see a button that will route you to
a page containing combined output. It might be useful if some workflow command
group (like port-scan) needs output of the entire group to be used.

## Workflow Commands

They are scheduled commands executed on schedule. Currently, the way you define
a schedule is using minutes. It is simpler to reason at least in the beginning.
The cron way of describing schedule can be added in the future.

Each workflow command is scheduled once the runner asks for the job.

<img src="/workflow-command-connect.png">

## On-Demand Commands

This type of command is not scheduled. They are executed on-demand when you
click on the `Run` button in the header of your specific command, from the UI.

Purpose of this is so you can have a quick way to run commands that you
don't want to be executed on schedule.

## Quick links

Quick links are there so you can put project-based links there for easier
lookup.

One use-case might be a link to the target on the bug bounty platform if you
want to submit your bounty.

## Settings

Settings are there so you can change the name or description of your project,
and also to tie notifications to that project.

If you have multiple slacks configured on your account, you can pick which ones
you want to be notified on for each particular project.
