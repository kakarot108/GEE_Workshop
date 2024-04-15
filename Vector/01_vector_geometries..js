// Creating Geometry objects
// https://developers.google.com/earth-engine/geometries

/* You can create geometries interactively using the Code Editor geometry tools. 
To create a Geometry programmatically, provide the constructor with the proper list(s) of coordinates.
For example:*/

var point = ee.Geometry.Point([1.5, 1.5]);

var lineString = ee.Geometry.LineString(
  [[-35, -10], [35, -10], [35, 10], [-35, 10]]);

var linearRing = ee.Geometry.LinearRing(
  [[-35, -10], [35, -10], [35, 10], [-35, 10], [-35, -10]]);

var rectangle = ee.Geometry.Rectangle([-40, -20, 40, 20]);

var polygon = ee.Geometry.Polygon([
  [[-5, 40], [65, 40], [65, 60], [-5, 60], [-5, 60]]
]);

/*Note that the distinction between a LineString and a LinearRing is that the LinearRing is “closed” 
by having the same coordinate at both the start and end of the list.*/

// Create a multi-part feature.
var multiPoint = ee.Geometry.MultiPoint([[-121.68, 39.91], [-97.38, 40.34]]);

// Get the individual geometries as a list.
var geometries = multiPoint.geometries();

// Get each individual geometry from the list and print it.
var pt1 = geometries.get(0);
var pt2 = geometries.get(1);
print('Point 1', pt1);
print('Point 2', pt2);
