/*Rendering categorical maps

Palettes are also useful for rendering discrete valued maps, for example a land cover map. 
In the case of multiple classes, use the palette to supply a different color for each class. 
(The image.remap() method may be useful in this context, to convert arbitrary labels to consecutive integers). 
The following example uses a palette to render land cover categories: */

// Load 2012 MODIS land cover and select the IGBP classification.
var cover = ee.Image('MODIS/051/MCD12Q1/2012_01_01')
  .select('Land_Cover_Type_1');

// Define a palette for the 18 distinct land cover classes.
var igbpPalette = [
  'aec3d4', // water
  '152106', '225129', '369b47', '30eb5b', '387242', // forest
  '6a2325', 'c3aa69', 'b76031', 'd9903d', '91af40',  // shrub, grass
  '111149', // wetlands
  'cdb33b', // croplands
  'cc0013', // urban
  '33280d', // crop mosaic
  'd7cdcc', // snow and ice
  'f7e084', // barren
  '6f6f6f'  // tundra
];

// Specify the min and max labels and the color palette matching the labels.
Map.setCenter(-99.229, 40.413, 5);
Map.addLayer(cover, {min: 0, max: 17, palette: igbpPalette},'IGBP classification');

