// More spatial reducers

// How to find out minimum and maximum band values of one single image?

// Define a variable for Landsat image you wish to use.
var image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_189018_20181015');

// Set map center where the image is, using the command Map.centerObject()
Map.centerObject(image, 6);

// Add the image on the map view.
Map.addLayer(image, {'min': 80, 'max': 2800, 'bands': ['B4', 'B3', 'B2']});

// To get min and max of each band:
var min = image.reduceRegion({
  reducer: ee.Reducer.min(),
  geometry: image.geometry(),
  crs: 'EPSG:4326',
  scale: 30,
  maxPixels: 1e9
  });
  
var max = image.reduceRegion({
  reducer: ee.Reducer.max(),
  geometry: image.geometry(),
  crs: 'EPSG:4326',
  scale: 30,
  maxPixels: 1e9
  });
  
print("Band min values", min);
print("Band max values", max);

// Observe how one single image area can be retrieved with image.geometry().
