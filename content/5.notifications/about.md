---
title: "Notifications"
description: "Configuring notifications related to project events"
---

## Notifications

The idea behind notifications is so you can be notified on certain events that may be of interest to you. They may originate from

- Jobs:
  - Workflow failures
  - New content on the same scan
- Support:
  - Any interaction on the support ticket.

The idea behind it is for you to be notified each time a scan returns something different, so you can be one of the first ones to test a new subdomain,
port, or functionality on the site.

Similarly, if workflow starts failing, it can indicate either a bug in the tooling, or a change on the site which causes scan to fail. If a subdomain is suddenly
deleted, maybe there is another one and you should start the subdomain discovery. Or maybe the rest of your workflow cannot proceed because of the bug in a workflow.

The idea is for you to be busy hunting, and only spend as little time as possible gathering information.

### E-mails

These are e-mail addresses that you can use to be notified on, and can be different from your primary e-mail address. Primary e-mail address is only used for profile related actions, such as password reset etc.

On the other hand, notification e-mails are only used so you can be notified about events. You can duplicate your primary e-mail address.

**You cannot use it to sign in or any other profile related action**.

### Slacks

Slack notifications are based on the BountyHub App. App is installed to your workspace.

Slack app is registered with the following permissions:

- `chat:write`
- `chat:write.public`

