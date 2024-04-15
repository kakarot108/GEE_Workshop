// How does GEE handle scale and projection?

// Get an image and select the first band.
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318').select(0);

//  Remember that you can check the projection of the image by calling projection() on it:
print('Projection, crs, and crs_transform:', image.projection());

// ..and  check the native resolution of an image by calling projection().nominalScale() on it:
print('Scale in meters:', image.projection().nominalScale());

// Inspect the results in the Console.

/* Note: The native resolution is the nominal pixel scale in meters of the lowest level of the image pyramid. 
Because each band of an image can have a different scale and/or projection, if you call projection() on an 
image with at least one band that doesn't have the same projection as the others, you may see an error like:
Image.projection: The bands of the specified image contain different projections. Use Image.select to pick a 
single band.*/

// Add the image in the map view:
Map.centerObject(image, 8);
Map.addLayer(image, {'min': 8000, 'max': 12000});

// Example of specifying scale and projection: when exporting an image
Export.image.toDrive({
  image: image,
  description: 'imageExport',
  scale: 60, // You can set the scale to something other than the nominalScale.
  crs: 'EPSG:2771' // You can set the projections to something other than the original projection.
});

/* EXERCISE:
Use the inspector to see what the current zoom level pixel size is and how it changes when you zoom in.

Note how usually you are working on something other than the native pixel resolution; this may be depend on the zoom
level of the Map View (if you've added the image on the map) or zoom level/scale set in your script. */


