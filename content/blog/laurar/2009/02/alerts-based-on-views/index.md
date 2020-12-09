---
title: "Alerts Based on Views"
date: "2009-02-11"
author: laurar
---

This is a "SharePoint Tip of the week" email that I sent out to our site administrators in November of 2007.  Thought I'd share it...

**In SharePoint 2007, alerts can be set up based on filtered (specific) data, using views!**

This applies to any SharePoint document library or list (contacts, calendars, tasks, etc.).  The following example will include how this is done on a document library with custom fields.

## Example Case

n An example hospital has different floors on their hospital.  They have created a new field in the Patient Admissions list called “Floor”.  Users are given a drop-down box of options for what floor a patient is admitted to.  Users would like to know if they can set up Patient Admissions list alerts so that they are only notified when patients are admitted to THEIR floor.  SURE THEY CAN!

n First, the appropriate VIEWS need to be created, one for each “floor”.  Create 4 new views for: 1 North, 1 South, 2 North, 2 South

n The first view will have a filter of: **Show the items when column** Floor **_is equal to_** 1 North Create the other 3 views with filtering for each of their appropriate floor names

## Creating the Alerts.

n On the Patient Admissions list, click <**Actions**\> and choose <**Alert Me**\>

n In the Send alerts for these changes section, choose the very last option called “**Someone changes an item that appears in the following view**”

n Then, in the drop-down box for that option, choose the name of the floor for which you’d like to receive alerts.

n **In summary, any data in any field of your list can be filtered into a View.  Alerts can be created based on any \*filtered\* view, even “Personal” views.**

Oh, and another good way to use this feature would be on an Announcements list.  Each announcement would have a category, such as the department that the announcement is targeted to.  Create a view for each category.  This way, your users can set up their own alerts on the announcements list, and choose to only be alerted when a new one is added for _their_ department.
