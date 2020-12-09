---
title: "Uploading a File to an Azure Storage Container"
date: "2013-10-06"
author: gregc
---

Here's the scenario: You have a file or blob of sorts that needs to be stored in an Azure Storage Container. That's great - how do you get it to the container?? I have done this a few times and PowerShell is definitely my preferred method but I can never remember the steps. So, for my benefit and maybe others, here they are:

1: Get-AzurePublishSettingsFile

This will actually pop open IE (or your default browser), have you log into Azure, and then automatically download a .publishsettings file. You'll need this file to import and set up your subscriptions. More information on this command can be found on MSDN [here](http://msdn.microsoft.com/en-us/library/dn408558.aspx).

2: Import-AzurePublishSettingsFile _<pathToPublishSettingsFile>_

This import command does exactly as it describes, allows you to import the .publishsettings file from step 1 to your local PowerShell environment. When this import completes, it will tell you which subscription (only matters if you have multiple) has been set as the default subscription. If you need to change this, use step 3, if not, proceed to step 4. More information on this command can be found on MSDN [here](http://msdn.microsoft.com/en-us/library/dn408491.aspx).

3: Select-AzureSubscription _<subscriptionName>_

This command is optional and simply sets the current Azure subscription to be used in the existing context. More information on this command can be found on MSDN [here](http://msdn.microsoft.com/en-us/library/dn408494.aspx).

4: $context = New-AzureStorageContext -StorageAccountName <storageAccountName> -StorageAccountKey <storageAccountKey>

This command generates a new Azure Storage Context and stores it in the variable $context. This will be used to tell PowerShell where the new blob is going to be stored in Azure. Your storage account name and key are both found within the Azure management [site](https://manage.windowsazure.com). More information on this command can be found on MSDN [here](http://msdn.microsoft.com/en-us/library/dn408568.aspx).

5: Set-AzureStorageBlobContent -Blob "_<blobName>_" -Container _<containerName>_ -File "_<sourceFileName>_" -Context $context -Force

This is where the magic happens. Set-AzureStorageBlobContent, again, does exactly as it describes. The Blob parameter is what the file (or blob) will be called once uploaded to the Azure container. Container is the target container within your Azure storage account. The File parameter is the full path and name of the source file that you want to uploaded to the Azure container. Context is the context variable from step 4. Once executed, you will see a status appear at the top of your PowerShell console which shows the percentage uploaded until the upload is complete. More information on this command can be found on MSDN [here](http://msdn.microsoft.com/en-us/library/dn408487.aspx).

For bulk uploading, the best thought I have is to read a directory that is to be uploaded, then run this command in a loop. If anyone has a better way - please feel free to comment on this post and I'll update it and give credit for the suggestion!
