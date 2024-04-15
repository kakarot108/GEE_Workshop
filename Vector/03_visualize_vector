//To visualize a geometry, add it to the map. For example:

var point = ee.Geometry.Point([26.8, 67.1]);

var lineString = ee.Geometry.LineString(
  [[-18, 64], [15, 67], [40, 65], [52, 69]]);

var linearRing = ee.Geometry.LinearRing(
  [[-18, 64], [15, 67], [40, 65], [52, 69], [-18, 64]]);

var rectangle = ee.Geometry.Rectangle([63, 63, 73, 66]);

// Create a geodesic polygon.
var polygon = ee.Geometry.Polygon([
  [[-5, 40], [65, 40], [65, 60], [-5, 60], [-5, 60]]
]);

// Create a planar polygon.
var planarPolygon = ee.Geometry(polygon, null, false);

// Display on the map.
Map.centerObject(polygon);
Map.addLayer(point, {color: '#0000ff'}, 'point');
Map.addLayer(lineString, {color: '000000'}, 'lineString');
Map.addLayer(linearRing, {color: '#00ff00'}, 'linearRing');
Map.addLayer(rectangle, {color: '#ffff00'}, 'rectangle');
Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon, {color: '000000'}, 'planar polygon');

/* Check https://developers.google.com/earth-engine/geometries_planar_geodesic for information about
Geodesic vs. Planar geometries.*/

// We can also get more advanced with thh styling and control the stroke colour, width, fill etc.
// This is done using the Feature style() method and passing it a style dictionary
var styling = {color: 'red', fillColor: '00000000', lineType: 'dashed', width: 5};
Map.addLayer(polygon.style(styling), {}, 'Boundary')
