var geometry = ee.Geometry.Point([31.374682114469127, -23.915478442891306]);

// Map a function over a collection (a for each operation)
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA")

// Define a function that will add an NDVI band to a Landsat 8 image.
var addNDVI = function(image) {
  // Remember how we did NDVI in 09_band_maths, well here is an easier method.
  var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};

// Filter the image collection and map the function over the collection,
// so that the NDVI band gets added on every image in the collection.
var withNDVI = l8.filterDate('2019-01-01', '2020-01-01')
                 .filter(ee.Filter.lt('CLOUD_COVER', 10))
                 .map(addNDVI)

// NB: remember to always use map() instead of for loops of your own.    

// Define a true color visualization for Landsat 8.
var trueColorVis = {min: 0, max: 0.3, bands: ['B4', 'B3', 'B2']};

// Add on map.
Map.addLayer(withNDVI, trueColorVis, 'Collection with NDVI band');
Map.addLayer(withNDVI.select('NDVI'), {min: 0, max: 0.6, palette: ['blue', 'red', 'yellow', 'green']}, 'NDVI')
Map.centerObject(geometry, 9)

// Activate the inspector tab and click somewhere on the map.
// Inspect the images (and their bands). 
