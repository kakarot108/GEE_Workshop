// Visualizing an image

/* 
When you add an image to the map using Map.addLayer(), Earth Engine needs to determine 
how to map the values in the image band(s) to colors on the display. If a single-band 
image is added to a map, by default Earth Engine displays the band in grayscale, where 
the minimum value is assigned to black, and the maximum value is assigned to white. 
If you don't specify what the minimum and maximum should be, Earth Engine will use default values. 
*/

/*To change the way the data are stretched, you can provide a parameter, visParams, to the Map.addLayer call.
It lets you specify the minimum and maximum values to display. */

// Define a variable for Landsat image you wish to use.
var ls_image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_189018_20181015');

// Set map center where the image is, using the command Map.centerObject()
Map.centerObject(ls_image, 6);

// Add the image on the map view with some visualization parameters.
Map.addLayer(ls_image, {'min': 0, 'max': 16000, 'bands': ['B4', 'B3', 'B2']});

/* EXERCISE: 

1. Inspect the above visualization parameters given and the output on the map. 
The min and max values of the visualization need to be changed, don't they?
Go to the Layers manager in the map view and click the Settings wheel to see the Layer visualization options.
You can test and Apply different streching options in the Range section.
When you find good min and max values, update and save them in the script above.

2. Try another visualization of the image, e.g. bands 5-6-4. 
Then import the visualization parameters you've chosen into the script.

Note that the imported parameters appear at the top of the script.

To add the second visualization, uncomment the following line and run the code again.
*/

// Map.addLayer(ls_image, imageVisParam);

// More information about image visualization: https://developers.google.com/earth-engine/image_visualization
