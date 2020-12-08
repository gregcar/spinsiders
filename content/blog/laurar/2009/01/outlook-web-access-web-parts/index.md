---
title: "Outlook Web Access Web Parts"
date: "2009-01-23"
---

This is my first blog post, ever.  So, I'll start with something simple.  Well, it starts off simple, but the end leaves a little to be desired.  Here goes...

Outlook Web Access web parts are meant for use on SharePoint My Sites.

Each Outlook Web Access web part has the following required fields: Mail server address Mailbox

Now, for end users, the Mailbox field is pretty easy, since it only requires their email address.  Unfortunately, it seems that the Mail server address field seems to be the main reason that a lot of people don’t use these web parts.  Most end users don’t know their email server name.

Here’s how to set the Mail server address field to auto-populate for a single user:

1\. In Central Admin, go to your Shared Services Administration site. 2. Click on **User Profiles & Properties** 3. Click **View User Profiles** 4. Find your own account name 5. Edit your profile 6. Scroll down to the **Outlook Web Access URL** field.  This is the one to fill in.

> Here’s how to determine what URL goes in here.  You do need to know the server name of at least one email server in your company.  Log into your Outlook Web Access, and look at the URL after you’ve logged in.  It probably looks like [https://email.company.com/exchange](https://email.company.com/exchange) For ours, I simply change it to http, and replace email.company.com with an email server name.  It doesn’t have to even be my mailbox server, it can be any mail server in the same domain.  So, the result is [http://servername/exchange](http://servername/exchange)

7\. Save your profile 8. Go to your My Site, and when you add OWA web parts, the Mail server address field will already be filled in. 9. Also, _as a bonus_, you’ll notice that there’s a new link at the top of your My Site, called “**My OWA**”.  This link will take you directly to OWA, without having to log in!

Okay, so that took care of one user, how do we get everyone’s Outloook Web Access URL field to populate?  In SSP, User Profile & Properties, View Profile Properties, edit that field.  It appears that the only way this will work is to connect to some data source.  Pick a custom field in Active Directory to map to, use a script to automatically fill in all user AD accounts with [http://servername/exchange](http://servername/exchange), and you’re good to go.

That last sentence is the complicated part, so if anyone reading this tries it, let me know how it goes.
