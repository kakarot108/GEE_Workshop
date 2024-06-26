// Some more geometric operations

//The following example computes and visualizes derived geometries based on the relationship between two polygons:

// Create two circular geometries by buffering two points.
var poly1 = ee.Geometry.Point([-50, 30]).buffer(1e6);
var poly2 = ee.Geometry.Point([-40, 30]).buffer(1e6);

// Display polygon 1 in red and polygon 2 in blue.
Map.setCenter(-45, 30);
Map.addLayer(poly1, {color: 'FF0000'}, 'poly1');
Map.addLayer(poly2, {color: '0000FF'}, 'poly2');

// Compute the intersection, display it in blue.
var intersection = poly1.intersection(poly2, ee.ErrorMargin(1));
Map.addLayer(intersection, {color: '00FF00'}, 'intersection');

// Compute the union, display it in magenta.
var union = poly1.union(poly2, ee.ErrorMargin(1));
Map.addLayer(union, {color: 'FF00FF'}, 'union');

// Compute the difference, display in yellow.
var diff1 = poly1.difference(poly2, ee.ErrorMargin(1));
Map.addLayer(diff1, {color: 'FFFF00'}, 'diff1');

// Compute symmetric difference, display in black.
var symDiff = poly1.symmetricDifference(poly2, ee.ErrorMargin(1));
Map.addLayer(symDiff, {color: '000000'}, 'symmetric difference');

/*In these examples, note that that maxError (ee.ErrorMargin) parameter is set to one meter for the geometry operations. 
The maxError is the maximum allowable error, in meters, from transformations (such as projection or reprojection)
that may alter the geometry. If one of the geometries is in a different projection from the other, 
Earth Engine will do the computation in a spherical coordinate system, with a projection precision given by maxError. 
You can also specify a specific projection in which to do the computation, if necessary.*/
