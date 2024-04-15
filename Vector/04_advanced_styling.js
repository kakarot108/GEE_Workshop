// If we have a list of features we can also add a style property to each feature and then style them
// all on the same layer using the style feature

// Let's load the Feature we created earlier
var geometry = ee.FeatureCollection("users/hugheslloyd/ZZ2/VREEDZAAM");

// Add the AOI boundary to the map
Map.centerObject(geometry, 12)
var styling = {color: 'red', fillColor: '00000000'};
Map.addLayer(geometry.style(styling), {}, 'Boundary')

// Load a MODIS Image
var classes = ee.Image("MODIS/051/MCD12Q1/2013_01_01").select(0).rename("class")
// Get the palette and class values from the image
var palette = ee.List(classes.get('Land_Cover_Type_1_class_palette')).slice(0, 17)
var values = ee.List(classes.get('Land_Cover_Type_1_class_values')).slice(0, 17)

// Style the map layer using the palette values
Map.addLayer(classes.visualize({min:0, max: 16, palette: palette, opacity: 0.5}))

// Add lat lon bands to the image, so we can sample points from it
var inputs = classes.addBands(ee.Image.pixelLonLat())

// Sample some points from the image at random (don't worry about this we'll get to it later)
var points = inputs.stratifiedSample({
  numPoints: 100, 
  classBand: "class",
  region: geometry, 
  scale: 500
})

// For each point in the Collection get the "class" and create a new Point Feature with the geometry
var features = points.map(function(f) {
  var klass = f.get("class")
  var point = ee.Feature(ee.Geometry.Point([f.get('longitude'), f.get('latitude')]), f.toDictionary())
  // Add Styling parameters to every Feature based on the palette and class values
  return point.set({style: {color: palette.get(klass) }})
})

// Style the feature using the Feature Metadata we just added
Map.addLayer(features.style({styleProperty: "style"}))
