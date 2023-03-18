# Overview

The app is currently notifying you only using Slack.

If you have other requirements, please let us know by submitting an issue or
creating a discussion on GitHub.

## BHBot

The intention is to create an installable app on Slack. The app should contain
only permissions to write to your channels. The app is meant to simplify distribution and
installation of the notification feature offered by the platform

## Single-Workspace App

You can also create your own app and configure OAuth token.

Slack has a great documentation that you can find
[here](https://api.slack.com/start/overview#creating).

Once you have created an app, you should go to the OAuth and copy the token.
With that token, you should go to your profile, and in the `Notifications` tab,
insert:

- Name: This field is used in project settings to connect this slack
  notification and app, to your scheduled findings
- OAuth: OAuth token copied from your newly created app with correct
  permissions.
- Channel ID: Id of the channel where you want to be notified.


Please note that you need to have correct permissions. Otherwise, you won't be
notified. The job will still execute successfully, but the server won't be able
to send the notification to your Slack.

Permissions needed for the app are:

- `chat:write` - required
- `chat:write.public` - nice to have permission, so you don't have to invite the
  bot to the channel
