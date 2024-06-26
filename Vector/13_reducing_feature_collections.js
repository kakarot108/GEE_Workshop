//Reducing a FeatureCollection

/*To aggregate data in the properties of a FeatureCollection, use featureCollection.reduceColumns().
For example, to check the area properties in the aoi FeatureCollection, this code computes 
the Root Mean Square Error (RMSE) relative to the Earth Engine computed area:*/

// Load watersheds from a Fusion Table and filter to the continental US.
var aoi = ee.FeatureCollection('users/hugheslloyd/ZZ2/Ramatoela');

// This function computes the squared difference between an area property already in the table
// and area computed directly from the feature's geometry.
var areaDiff = function(feature) {
  // Compute area in sq. km. directly from the geometry.
  var area = feature.geometry().area().divide(1000 * 1000);

  // Compute the differece between computed area and the area property in the table.
  var diff = area.subtract(feature.get('HA'));

  // Return the feature with the squared difference set to the 'diff' property.
  return feature.set('diff', diff.pow(2));
};

// Map the difference function over the collection.
var rmse = ee.Number(aoi.map(areaDiff)
    // Reduce to get the mean squared difference.
    .reduceColumns(ee.Reducer.mean(), ['diff'])
    .get('mean'))
    // Compute the square root of the mean square to get RMSE.
    .sqrt();

// Print the result.
print('RMSE=', rmse);

/* In this example, note that the return value of reduceColumns() is a dictionary with key ‘mean’. 
To get the mean, cast the result of dictionary.get() to a number with ee.Number() before trying to 
call sqrt() on it. */
    
