// Image Collections

/* In GEE, a stack of several images is called Image Collection; e.g. all Landsat 8 Collection 1 
Tier 1 Raw Scenes available. Each data source on GEE has it’s own Image Collection ID that you can 
find from the data catalogue.*/

//Set the center of the map view.
Map.setCenter(19.13, -33.78, 8);

// ee.ImageCollection() calls a collection of images instead of one single image, as compared to ee.Image().
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1') // Landsat 8 Raw scenes
                 .filterDate('2013-06-01', '2013-12-31') // filtered to a time frame.


// Add an image collection in the map view.
Map.addLayer( collection, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000});

// Note how you can  add visual parameters just like you did before with the single image.    
// Also you are using a time filter called filterDate.
// We will see more filtering options in the next scripts.


/* EXERCISE:
using the example above, and the data catalogue, find and display Sentinel-2 collection.
Filter it to a time frame of your choice. */
