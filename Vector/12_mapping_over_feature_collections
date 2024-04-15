// Mapping over a FeatureCollection

/*To apply the same operation to every Feature in a FeatureCollection, use featureCollection.map().
For example, to add another area attribute to every feature in a watersheds FeatureCollection:*/

// Load a FeatureCollection from a Shapefile
var aoi = ee.FeatureCollection('users/hugheslloyd/ZZ2/Ramatoela');

// This function computes the feature's geometry perimeter and add it in kilometers
var addArea = function(feature) {
  return feature.set({perimeterKm: feature.geometry().perimeter().divide(1000)});
};

// Map the area adding function over the FeatureCollection.
var areaAdded = aoi.map(addArea);

// Print the first feature from the collection with the added property.
print('First feature: ', areaAdded.first());
