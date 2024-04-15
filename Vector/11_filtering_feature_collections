//Filtering a FeatureCollection

//Filtering a FeatureCollection is analogous to filtering an ImageCollection.

// Load a FeatureCollection from a Shapefile
var aoi = ee.FeatureCollection('users/hugheslloyd/ZZ2/Ramatoela');

// print out and inspect the collection. It has many fdeatures and properties
print(aoi)

Map.centerObject(aoi, 16)
Map.addLayer(aoi.style({color: 'blue', fillColor: '00000000'}))

// Create a random point and select all fields within 100m of the point
var point = ee.Geometry.Point([29.992822576385525, -23.696921230438782]);

var filtered_fields = aoi.filterBounds(point.buffer(100))
Map.addLayer(filtered_fields.style({color: 'red', fillColor: '00000000'}))
Map.addLayer(point, {color: "black"})

print('Count before filter:', aoi.size());
print('Count after filter:', filtered_fields.size());

// Filter the fields by size to only get those which are greater than 4Ha
var large = filtered_fields.filter(ee.Filter.gt('HA', 2.5));
print('Count after filtering by size:', large.size());
Map.addLayer(large.style({color: 'green', fillColor: '00CF00CC'}))
