---
title: "The Category Page in a SharePoint Blog Site"
date: "2009-02-10"
---

In this blog post, I’ll not only go over how to fix the category.aspx page when it breaks, but how to associate an image with each blog category, and have that image displayed each time you view that category’s page.

On each site created using the Blog Site template in SharePoint, there is list for blog categories. On the left side of the Blog’s main page, the categories are listed, along with a button to add a new category. The default categories are Category 1, 2, and 3. When one of these category names is clicked, you are taken to category.aspx. This page automatically filters your blog entries by the name of the category that was clicked. Unfortunately, it appears that any time you go into edit mode on this category.aspx page, and modify / mess with the web part view, the automatic filter functionality is broken.

This can be fixed using the Query String (URL) filter web part:

1. Add the Query String (URL) filter web part to the category.aspx page.
    
2. Query String Parameter name = Category
    
3. Create a connection from the filter web part to the Posts web part, to the posts' category field.
    

# How To Associate An Image With Each Blog Category

1. Create a picture library
    
2. In this image library, create a new column, called “**Cateogry**”, as a lookup field to the Category list.
    
3. If you haven’t already, go to the category.aspx page and do steps 1 through 3 in the first part of this blog.
    
4. Upload your images, and associate each image with a category.
    
5. Create a blank web part page on this site. It doesn’t matter which library it's in, because you can delete it when you’re done.
    
6. Open this page in SP Designer, and click in a zone, and add a data view web part. Pick your image library where the category-associated images are stored.
    
7. In the data source library pane on the right, click the drop-down on your image library, and choose "Show data". Select only the Name field, and choose to insert selected field as... **Multiple item view**.
    
8. Put your aspx page in split screen in SPD, so you can see the code. Select the first cell that contains the name of the first image in the library.
    
9. In the code, within the <td> (that cell), paste this: <img border="0" src="{@FileRef}" />
    
10. Then, this will display only the images in your table.
    
11. Save, and go open this web part page in your browser. Export the web part.
    
12. Go to the category.aspx page. Import the web part there. It will look nice in the **Right zone**.
    
13. Create a new web part connection from your Query String URL filter to this new image library web part. For the filter field, choose "Category".
    

**Done!  Now, each time you click on a category page, you see the image associated with that category.**
