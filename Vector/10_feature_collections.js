//FeatureCollections

/*Creating FeatureCollections
One way to create a FeatureCollection is to provide the constructor with a list of features. 
The features do not need to have the same geometry type or the same properties. For example:*/

// Make a list of Features.
var features = [
  ee.Feature(ee.Geometry.Rectangle(30.01, 59.80, 30.59, 60.15), {name: 'Voronoi'}),
  ee.Feature(ee.Geometry.Point(-73.96, 40.781), {name: 'Thiessen'}),
  ee.Feature(ee.Geometry.Point(6.4806, 50.8012), {name: 'Dirichlet'})
];

// Create a FeatureCollection out of the list and print it.
var fromList = ee.FeatureCollection(features);
print('Feature Collection 1', fromList);

// Individual geometries can also be turned into a FeatureCollection of just one Feature:

// Create a FeatureCollection from a single geometry and print it.
var fromGeom = ee.FeatureCollection(ee.Geometry.Point(16.37, 48.225));
print('Feature Collection 2', fromGeom);


/////////////////////////////////////////////////////////////////////////////////////

// Loading FeatureCollections from GEE data catalogue
/* Earth Engine hosts a variety of table datasets. 
To load a table dataset, provide the table ID to the FeatureCollection constructor.
For example, to load TIGER roads data:*/

var fc = ee.FeatureCollection('TIGER/2016/Roads');
Map.setCenter(-73.9596, 40.7688, 12);
Map.addLayer(fc, {}, 'Census roads');

// There is a list of selected vector datasets hosted by Earth Engine on this page:
// https://developers.google.com/earth-engine/vector_datasets
