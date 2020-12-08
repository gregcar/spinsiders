---
title: "Who has forwarding enabled in their Exchange Online mailbox??"
date: "2013-06-18"
---

How do I know, without looking at the properties of every Exchange Online mailbox, which users have setup mail forwarding on their mailbox?  That is a very good question.  If you Google around you'll find lots of interesting answers, particularly around using LDAP queries to identify those mailboxes - but how do you do that in Exchange Online???  PowerShell is the answer!

First, here is how you connect to your Exchange Online tenant: [http://technet.microsoft.com/en-us/library/jj984289(v=exchg.150).aspx](http://technet.microsoft.com/en-us/library/jj984289(v=exchg.150).aspx).

Second, run this command:

`Get-Mailbox -Filter {ForwardingSmtpAddress -ne $null}`

That will give you a list of all the users that have enabled (or have a not null) forwarding address configured.  Taking this one step further you can grab the user and the destination address by using this command:

`Get-Mailbox -Filter {ForwardingSmtpAddress -ne $null} | foreach {$recipient = $_; $forwardingsmtp = (Get-Recipient $_.ForwardingAddress).PrimarySmtpAddress; Write-Host $recipient.Name, $_.ForwardingSmtpAddress }`

Ultimately you'd probably want to put this in a script of it's own an pipe the results to a text file for further analysis.

Lastly, don't forget to disconnect your PowerShell session - remember, you can only have 3 open sessions to Exchange Online.
