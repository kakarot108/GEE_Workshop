// Vector Metadata

/*To view information about a geometry, print it. To access the information programmatically, 
Earth Engine provides several methods. For example:*/

// Create a geodesic polygon.
var polygon = ee.Geometry.Polygon([
  [[-5, 40], [65, 40], [65, 60], [-5, 60], [-5, 60]]
]);

print('Polygon printout: ', polygon);

// Print polygon area in square kilometers.
print('Polygon area: ', polygon.area().divide(1000 * 1000));

// Print polygon perimeter length in kilometers.
print('Polygon perimeter: ', polygon.perimeter().divide(1000));

// Print the geometry as a GeoJSON string.
print('Polygon GeoJSON: ', polygon.toGeoJSONString());

// Print the GeoJSON 'type'.
print('Geometry type: ', polygon.type());

// Print the coordinates as lists.
print('Polygon coordinates: ', polygon.coordinates());

// Print whether the geometry is geodesic.
print('Geodesic? ', polygon.geodesic());

/* Observe that the perimeter (or length) of a geometry is returned in meters and the area is 
returned in square meters unless a projection is specified. By default, the computation is performed
on the WGS84 spheroid and the result is computed in meters or square meters.*/

/////////////////////////////////////////////////////////////////////

// Let's create a more rich geometry. We can do this by adding metadata to a Feature object

// Create a Feature from the Geometry.
var polyFeature = ee.Feature(polygon, {id: 42, type: 'aoi'});

// Print the Feature in the console.
print('Information about the Feature', polyFeature);

// Add it on the map.
Map.centerObject(polyFeature, 2)
Map.addLayer(polyFeature, {}, 'feature');

// Make a point feature and set some properties.
var feature = ee.Feature(ee.Geometry.Point([-122.22599, 37.17605]))
.set('genus', 'Sequoia').set('species', 'sempervirens');

// Get a property from the feature and print it.
var species = feature.get('species');
print('Species', species);

// Set a new property.
feature = feature.set('presence', 1);

// Overwrite the old properties with a new dictionary.
var newDict = {genus: 'Brachyramphus', species: 'marmoratus'};
var feature = feature.set(newDict);

// Check the result.
print('New Feature', feature);
