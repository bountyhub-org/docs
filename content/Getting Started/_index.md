# About

To start using this platform, you must create an account.

The account is bound to your e-mail and your handle. Each e-mail and each
handle is unique application-wise.

{{< hint type=warning >}}
The handle enumeration is possible due to descriptive error messages returned
by the server. But sometimes, you need a hint to know if you have already
created an account after not using the app for a while.

Because of that, **please use the strong password**. The
platform also does not implement the logic to check if the password is strong.
I leave it up to you to choose password.
{{< /hint >}}

Each handle must contain only ASCII letters, should not start with - and can
have at most one dash ('-') in sequence to separate names.

Some names are also restricted to have routing properly set up and to have
readable links. Using ids is not user-friendly especially in situation if
the platforms grows to have a social-networking feature.

# Registration process

On the landing page, on the top-right corner you can see the [Sign Up](https://bountyhub.org/sign-up) button.
The platform requires only information about your handle, email, full name and
password.

Once you have created an account, it is going to be deactivated by default. To activate it,
you will receive an e-mail with one-time token that you should click on. Once
you clicked on the e-mail, your account is going to be activated, but you will
have to sign in with your credentials as another layer of protection.

# Forgot password?

You have a button to reset your password. The email will be sent to the
address you have submitted for your account. Once there, the one-time token
will be generated and you will be able to reset your password.

# Landing page

Landing page contains links to some popular bug bounty platforms as well as some
useful resources like the runner link.

{{< hint type=note >}}
The application is not using third-party tracking cookies! If you see promoted links on
your landing page, that is because I (and hopefully later the company)
stand by that product. The application will never use third-party tracking cookies for
Google Analytics or similar. I don't want to inspect anyone's behaviour and sell
it. But if you find this platform useful, please recommend it to others.
{{< /hint >}}

# Profile page

## Profile picture

Profile picture is the BountyHub's logo by default. If you want to change it,
just click on the image and you can upload any image that you'd like.

## Tabs

From your profile, top level controls include:

- Projects
- Runners
- Notifications
- Quick Links

### Projects

This is where you would create a project for each target (or part of the target)
that you are hacking on. It is self-contained in a way that everything else is
scoped to the project itself. Projects do not interact with each other. You
can't use outputs from other project.

### Runners

The runner is the worker executing your workflows. No scans will be performed if
no runners are registered and on-line.

Each runner is executed on the machine that you own. The platform does not have
any automation to spin-up runners, or use existing ones in order to run your
workflows. More about it in the [Runners section](/Getting-Started/Runners/).

### Notifications

Here, you would add your slack app that the app will use to notify you about the
diff. Keep in mind, notifications are global, but they need to be included for
each project if you want to be notified through that channel. The reason for
that is I think it might be useful for large scans to have multiple channels on
slack that you want to be notified on.

Notifications right now only support slack notifications. More about that in the
[Notifications section](/Notifications/).

### Resource Links

Resource links are just that, links to the resources that you can quickly go to.
On the left-hand side, in the drawer, you will see
them persist on all pages. The reason for that is while hacking, they can be easily
accessible to you. Ideally, you would have this platform open in one tab so you
can quickly look up scans performed for further information.

Resource links are there so you can quickly go to your
notes, research materials etc.

# Settings page

You can all your profile information there. You can quickly go to the settings
page by clicking on your avatar image on the top-right corner of the nav-bar, or
just by going to the [settings](https://bountyhub.org/settings) link.

From there, you can also delete your profile. Keep in mind that if you delete
your profile, all of your data will be permanently deleted and unrecoverable at
this time. If there is a need later to make it recoverable, the feature can be
added.
