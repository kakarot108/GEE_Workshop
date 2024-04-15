// Functions to mask clouds using the QA band
// (from GEE Example Scripts)

// Sentinel-2 TOA

// This example uses the Sentinel-2 QA band to cloud mask the collection.
// The Sentinel-2 cloud flags are less selective, so the collection is also pre-filtered by the
// CLOUDY_PIXEL_PERCENTAGE flag, to use only relatively cloud-free granule.

// Create the function to mask clouds.
function maskS2clouds(image) {
  var qa = image.select('QA60'); // the cloud mask band.

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

// Then return the image with the cloud mask.
  return image.updateMask(mask).divide(10000);
}

// Map the function over one year of data
// Load Sentinel-2 TOA reflectance data.
var dataset = ee.ImageCollection('COPERNICUS/S2')
                  .filterDate('2018-01-01', '2018-06-30')
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(maskS2clouds);


Map.setCenter(-9.1695, 38.6917, 12);

var rgbVis = {bands: ["B4", "B3", "B2"], min:0, max: 0.3};

//Take the median and add on map.  
Map.addLayer(dataset.median(),rgbVis , 'Sentinel-2');



/////////////////////////////////////////////////////////////////////////////////////

//Landsat-8 Surface Reflectance

// Function to mask clouds based on the pixel_qa band of Landsat 8 SR data.
function maskL8sr(image) {
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
  var cloudShadowBitMask = (1 << 3);
  var cloudsBitMask = (1 << 5);
  // Get the pixel QA band.
  var qa = image.select('pixel_qa');
  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                 .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  return image.updateMask(mask);
}

var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
                  .filterDate('2016-01-01', '2016-12-31')
                  .map(maskL8sr);

var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};

Map.addLayer(dataset.median(), visParams, 'Landsat 8');
