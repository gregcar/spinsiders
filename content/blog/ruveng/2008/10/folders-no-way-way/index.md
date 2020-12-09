---
title: "Folders? No Way! Way!!!"
date: "2008-10-17"
author: ruveng
---

Today, Joris Poelmans (of [JOPX on SharePoint](http://jopx.blogspot.com/ "JOPX on SharePoint")) wrote a post [against the use of folders](http://jopx.blogspot.com/2008/10/folders-in-sharepoint-document.html "No folders in SharePoint") in SharePoint. Now don’t get me wrong, I too spend a good deal of my time explaining to customers why folders should be avoided in SharePoint. As Joris says: “NOOOOO .... metadata is the way to go in SharePoint”.

However, there are some cases where folders are absolutely the way to go and I want to tell you about my favourite example.

My customer has a team-site used for collaboration by the Human Resources teams in Toronto, Hong Kong, and Los Angeles. Most of the content on the site is shared among all groups, but there are some documents under the control of the VP of HR that are specific for each location. These documents should not be seen by anyone other than the targeted groups.

We already know that audience targeting is not an answer when security matters.

The solution is to create three folders, one for each location, and secure each folder so that only members of the appropriate groups can see them. This means that only members of the Hong Kong group can see the Hong Kong Folder. The VP of HR of course has access to all three folders, so that he can add/edit/delete documents from any folder. [![](images/secure-folders.png)](/files/2008/10/secure-folders.png)The final step that makes this really work, and avoids an extra click for the user, is to create a default view that is a “no-folders view”. With a no folders view, all the documents are displayed in “flat” format, with no folders in the way. However, the security that you’ve applied to the folder is still in effect, so you will only see files that you have the rights to see.

When you create the view, expand the “Folders” section and select “Show all items without folders”.

[![](images/foldersnofolders.jpg)](/files/2008/10/foldersnofolders.jpg) The bottom line is: Never use folders in SharePoint, except where they simplify or enhance functionality.
