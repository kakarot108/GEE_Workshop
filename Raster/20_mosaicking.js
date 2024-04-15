//Set the center of the map view.
Map.setCenter(19.13, -33.78, 8);

// Load a Landsat 8 image collection
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA') // Landsat 8 Raw scenes
                 .filterDate('2020-01-01', '2020-09-30') // filtered to a time frame.

// Plot the collection    
Map.addLayer(collection, {'bands': ['B4', 'B3', 'B2'], max: 0.4}, "collection");

// Create a simple newest first mosaic
var mosaic = collection.mosaic()

Map.addLayer(mosaic, {'bands': ['B4', 'B3', 'B2'], max: 0.4}, "newest first");


function mask_clouds(img) {
  // create a cloud mask
  var scored = ee.Algorithms.Landsat.simpleCloudScore(img)
  var mask = scored.select(['cloud']).lte(20);
  // Apply the mask to the image and display the result.
  return img.updateMask(mask);
}

// Create a cloud free mosaic by masking out the clouds and mosaicing the image together pixel-wise
var cloud_free = collection.map(mask_clouds).mosaic()

Map.addLayer(cloud_free, {'bands': ['B4', 'B3', 'B2'], max: 0.4}, "cloud free");
