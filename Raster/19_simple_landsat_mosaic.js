/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8raw = ee.ImageCollection("LANDSAT/LC08/C01/T1_RT"),
    geometry = /* color: #0b4a8b */ee.Geometry.Point([12.924733642667206, 42.30784186760896]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Compositing and mosaicking
// https://developers.google.com/earth-engine/ic_composite_mosaic

/*In general, compositing refers to the process of combining spatially overlapping images 
into a single image based on an aggregation function. Mosaicking refers to the process 
of spatially assembling image datasets to produce a spatially continuous image. In Earth Engine, 
these terms are used interchangeably, though both compositing and mosaicking are supported.*/

/* For creating simple cloud-free Landsat composites, Earth Engine provides the 
ee.Algorithms.Landsat.simpleComposite() method. This method selects a subset of scenes at each location, 
converts to TOA reflectance, applies the simple cloud score and takes the median of the least cloudy pixels.*/ 

// Load a raw Landsat 5 ImageCollection for a single year.
var collection = ee.ImageCollection('LANDSAT/LT05/C01/T1')
    .filterDate('2010-01-01', '2010-12-31');

// Create a cloud-free composite with default parameters.
var composite = ee.Algorithms.Landsat.simpleComposite(collection);

// Create a cloud-free composite with custom parameters for
// cloud score threshold and percentile.
var customComposite = ee.Algorithms.Landsat.simpleComposite({
  collection: collection,
  percentile: 75,
  cloudScoreRange: 5
});

// Display the composites.
Map.setCenter(-122.3578, 37.7726, 10);
Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], max: 128}, 'TOA composite');
Map.addLayer(customComposite, {bands: ['B4', 'B3', 'B2'], max: 128},
    'Custom TOA composite');
      
// Check the docs about the simpleComposite function.
