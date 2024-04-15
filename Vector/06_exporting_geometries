// Make a collection of points.
var features = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point(30.41, 59.933), {name: 'Voronoi'}),
  ee.Feature(ee.Geometry.Point(-73.96, 40.781), {name: 'Thiessen'}),
  ee.Feature(ee.Geometry.Point(6.4806, 50.8012), {name: 'Dirichlet'})
]);

// Export the FeatureCollection to a KML file.
Export.table.toDrive({
  collection: features,
  description:'vectorsToDriveExample',
  fileFormat: 'KML'
});

// Export an ee.FeatureCollection as an Earth Engine asset.
Export.table.toAsset({
  collection: features,
  description:'exportToTableAssetExample',
  assetId: 'exampleAssetId',
});

// 1) Go to the "Tasks" tab on the right and Click "RUN"
// 2) In the popup dialog fill in the details and hit RUN to start the export
// 3) Once the task turns blue go to your drive and you'll see the file there
