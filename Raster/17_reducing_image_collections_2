// More about reducing image collections

/*Reducers take an input dataset and produce a single output. Some reducers however produce multiple outputs, 
for example ee.Reducer.minMax(), ee.Reducer.histogram() or ee.Reducer.toList().*/

// Load and filter the Sentinel-2 image collection.
var collection = ee.ImageCollection('COPERNICUS/S2')
    .filterDate('2016-01-01', '2016-12-31')
    .filterBounds(ee.Geometry.Point([-81.31, 29.90]));

// Reduce the collection with the minMax reducer.
var extrema = collection.reduce(ee.Reducer.minMax());

//Print it.
print('Min max', extrema);

// Inspect the output in the console. Instead of a single band output, you have the min and
// max for each band (originally 16, now 32).

///////////////////////////////////////////////////////////////////////////////////////////

// Combining reducers

/*If your intent is to apply multiple reducers to the same inputs, it's good practice to combine() the 
reducers for efficiency. Specifically, calling combine() on a reducer with sharedInputs set to true 
will result in only a single pass over the data. For example, to compute the mean and standard deviation
of pixels in an image, you could use something like this:*/

// Load a Landsat 8 image.
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318');

// Combine the mean and standard deviation reducers.
var reducers = ee.Reducer.mean().combine({
  reducer2: ee.Reducer.stdDev(),
  sharedInputs: true
});

// Use the combined reducer to get the mean and SD of the image.
var stats = image.reduceRegion({
  reducer: reducers,
  bestEffort: true,
});

// Display the dictionary of band means and SDs.
print( 'Combined reducers', stats);
