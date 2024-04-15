// Exporting

// Load a landsat image and select three bands.
var landsat = ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_123032_20140515')
  .select(['B4', 'B3', 'B2']);

// Create a geometry representing an export region.
var geometry = ee.Geometry.Rectangle([116.2621, 39.8412, 116.4849, 40.01236]);

// Note how this is one way of defining a geometry. You could also use the "Draw a shape" tool, 
// or upload a shapefile in your assets and import it into the script. More on this later.

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: landsat,
  description: 'imageToDriveExample',
  scale: 30,
  region: geometry
});

// Hit run and go to your Tasks panel on the right to start the download.

// Check the arguments of Export.image.toDrive, and Export.image.toAsset.

///////////////////////////////////////////////////////////////////////

