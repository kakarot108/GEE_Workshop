// Displaying a single Landsat image in the Map view

/* 
The first new thing in this example is the image constructor ee.Image(). 
The argument provided to the ee.Image() constructor is the string ID of an image in the Earth Engine data catalog. 
*/

/*How to get the Landsat ID as required by GEE?  You'll need to know the specific collection ID in GEE, the Landsat satellite ID, 
WRS path and row, and aqcuisition date. So, in those cases where you have a specific image in mind and it's information from example 
from USGS, you can use the technique in this script. Other ways to find imagery will follow.*/


// Define a variable for Landsat image you wish to use.
var ls_image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_189018_20181015');

// Set map center where the image is, using the command Map.centerObject()
Map.centerObject(ls_image, 6);

// Add the image on the map view.
Map.addLayer(ls_image);

// Don't worry for now that the image is poorly visualized.

/* EXERCISE: 

1. Use the data search to find out which image collection is being used here.

2. Can you figure out the image path and row & aqcuisition date using the image ID given?

3. Find information about the two functions Map.addLayer() and Map.centerObject() using the Docs tab on the left.
See which arguments each one needs.

4. Remember how to print? 
Use the print command to inspect metadata about the image in the console.
Find out how many bands the image has, and what are the band names like.
*/



