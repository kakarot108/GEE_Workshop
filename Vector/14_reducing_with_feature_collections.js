/*To overlay features on imagery, use featureCollection.reduceRegions(). 
For example, to compute the volume of precipitation in continental US watersheds, use reduceRegions()
followed by a map():*/

var aoi = ee.FeatureCollection('users/hugheslloyd/ZZ2/Ramatoela');

// Get an mosaicked image of the water vapour pressure
var wvp = ee.Image(ee.ImageCollection("COPERNICUS/S2_SR").select('WVP').mosaic());

// Get the mean of the WVP over each Feature in the collection
var withWVP = wvp.reduceRegions({
  collection: aoi, 
  reducer: ee.Reducer.mean(),
  scale: 10
  });
  

var wvpVolume = function(feature) {
  // Precipitation in mm/day -> meters -> sq. meters.
  var volume = ee.Number(feature.get('mean'))
    .divide(100).multiply(feature.geometry().area());
  return feature.set('volume', volume);
};

var highVolume = withWVP
  // Map the function over the collection.
  .map(wvpVolume)
  // Sort descending.
  .sort('volume', false)
  // Get the 5 fields with the highest WVP
  .limit(5);

print(highVolume)

Map.centerObject(aoi, 15)
Map.addLayer(highVolume.style({color: 'red'}))


    
