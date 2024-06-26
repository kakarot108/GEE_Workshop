//Quality  Mosaics

/* To make a composite which maximizes an arbitrary band in the input, use imageCollection.qualityMosaic(). 
The qualityMosaic() method sets each pixel in the composite based on which image in the collection has 
a maximum value for the specified band.*/

// In this script, you can also observe how functions are mapped over image collections.

// This function masks clouds in Landsat 8 imagery.
var maskClouds = function(image) {
  var scored = ee.Algorithms.Landsat.simpleCloudScore(image);
  return image.updateMask(scored.select(['cloud']).lt(20));
};

// This function masks clouds and adds quality bands to Landsat 8 images.
var addQualityBands = function(image) {
  return maskClouds(image)
    // NDVI
    .addBands(image.normalizedDifference(['B5', 'B4']))
    // date
    .addBands(image.metadata('system:time_start'));
};

// Load a 2014 Landsat 8 ImageCollection.
// Map the cloud masking and quality band function over the collection.
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
  .filterDate('2014-06-01', '2014-12-31')
  .map(addQualityBands);

// Create a cloud-free, most recent value composite.
var recentValueComposite = collection.qualityMosaic('system:time_start');

// Create a greenest pixel composite.
var greenestPixelComposite = collection.qualityMosaic('nd');
// What are the values of greenestPixelComposite we created, i.e. what do they represent?

// Display the results.
Map.setCenter(19.13, -33.78, 9); //Cape Town
var vizParams = {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.4};
Map.addLayer(recentValueComposite, vizParams, 'recent value composite');
Map.addLayer(greenestPixelComposite, vizParams, 'greenest pixel composite');

// Compare this to a simple mosaic
Map.addLayer(collection.mosaic(), vizParams, 'cloudy', false);
    

/* Use the Code Editor Inspector tab to check pixel values at different locations in the 
composites. Observe that the system:time_start band may vary by location, indicating that 
different pixels come from different times.*/
