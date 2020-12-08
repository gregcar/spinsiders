---
title: "Fix for the Custom Form Attachments Issue"
date: "2009-02-18"
---

In my first blog post called [Displaying SharePoint Fields by Permission level](http://spinsiders.com/laurar/2009/01/23/displaying-sharepoint-fields-by-permission-level/), I made a side note that said

> Also, I’d like to note that when using custom forms like this, the Attachment button doesn’t work anymore.  I think there are blogs somewhere about this bug, but I’ve never tried fixing it.

Well, Microsoft finally has a fix for this.  So, aparently, as long as you do have the infrastructure update installed on your servers, and your SharePoint Designer is at SP1 level, you can install the following fix:

The following is the email directly from Microsoft about where to get the fix, and how to apply it: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

This is the client side fix:

[http://support.microsoft.com/kb/960311](http://support.microsoft.com/kb/960311)

The server side fix you already have installed but that is the WSS 3.0 Infrastructure Update.

Download this and update your SPD. This will place the code needed to make attachment functionality work for new and edit forms.

For **Display forms only**, you need to add this:

1. Open SharePoint Designer 2007. Go to File | Open Site and connect to SharePoint site.
2. Expand out Lists -> \[List Name\] -> open DispForm.aspx .
3. Highlight normal list form by clicking on it. This will select the entire webpart.
4. Right-click on selected web part, and choose Web Part Properties...
5. Expand \[+\] Layout, check option for Hidden, click OK.
6. With web part still highlighted, hit the right-arrow key once. Hit Enter. This creates some whitespace to insert.
7. Go to File | Insert SharePoint Controls | Custom List Form...
8. Select appropriate list or library, content type, and type of form to create. Click OK.
9. Put cursor in the "Expires" table cell, right-click | Insert | Row below. There should now be a new table row with two column cells.
10. Put cursor in the left table cell of the new row, type "Attachments".
11. Put cursor in the right table cell of the new row, go to Code view, and paste the following code: <SharePoint:AttachmentsField ControlMode="Display" FieldName="Attachments" runat="server" Visible="true"/>
12. Save page.

In summary, in SharePoint Designer, when you insert a custom form (DVWP) to create your own custom EditForm.aspx, DispForm.aspx, and NewForm.aspx, the attachment functionality won't break anymore.
