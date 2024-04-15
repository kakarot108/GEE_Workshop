// Clipping rasters with vectors

// Load our AOI
var roi = ee.FeatureCollection("users/hugheslloyd/ZZ2/VREEDZAAM");

// Load an image.
var image = ee.ImageCollection("COPERNICUS/S2_SR")
            .filterBounds(roi)
            .mosaic()

// Tip: Use the image.visualize() method to convert an image into an 8-bit RGB image for display or export. 
// For example, to create a false color 3-band display image, use:

// Create visualization layers.
var imageRGB = image.visualize({bands: ['B4', 'B3', 'B2'], max: 4000});

// Mosaic the visualization layers and display.
Map.addLayer(imageRGB, {}, 'False color S2', false);

Map.centerObject(roi, 13);

// Display a clipped version of the mosaic.
Map.addLayer(imageRGB.clip(roi), {}, 'clipped');
Map.addLayer(roi)
