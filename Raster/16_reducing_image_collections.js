// Reducing image collections
// https://developers.google.com/earth-engine/reducers_intro

/* When calling an image collection, each pixel on the map is derived from a stack of pixels.
The default behavior of GEE is to select the most recent available pixel 
(from the most recent scene in the stack).

We can alter this behavior by using a reducer. Remember how reducers are the way to aggregate
data over time, space, bands, arrays and other data structures in Earth Engine?
Image collection reductions occur over time. For example: pick the median value in the image 
collection stack, filtered by specified dates:*/

//Set the map center and zoom.
Map.setCenter(-119.84, 37.83, 8);

// Call an image collection of Landsat-8 raw scenes, filter it and take the median
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1')
                .filterDate('2013-06-01', '2013-12-31')
                
var median = collection.median()

Map.addLayer(median, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000}, 'median');

// Median reducer has the benefit of removing clouds (which have a high value) 
// and shadows (which have a low value).
