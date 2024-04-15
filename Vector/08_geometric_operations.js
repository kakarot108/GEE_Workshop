// We can also create vectors using points and expanding those into the shape we want
// Let's create a 100km2 square AOI from a single point, by reprojecting to UTM and buffering the point

// 1) Create a Feature point
var point = ee.Feature(ee.Geometry.Point([18.434344, -33.916781]), {city: "Cape Town", country: "South Africa", epsg: "EPSG:32734"});

// 2) Transform the point into UTM coordinates so we can work in meters
var point_utm = point.transform(ee.Projection(point.get('epsg')), ee.ErrorMargin(1, "meters"));

// 3) Create a circular buffer around the point with a radius of 25000m == 25km 
// this will give a 50x50km polygon
var point_buffered = point_utm.buffer(25000);

// 4) Get the bounding box of the buffered point, this will be our Polygon
var polygon = point_buffered.bounds();

// 5) Simplify the bounds to get a clean rectangle
var polygon_simple = polygon.simplify(ee.ErrorMargin(100, "meters"));

// 6) Get the centeroid of the polygon
var centroid = polygon_simple.centroid(ee.ErrorMargin(100, "meters"));

// Draw the various geometries to see the progression
Map.centerObject(point, 10)
Map.addLayer(point, {color: 'red'}, 'Point')
Map.addLayer(point_utm, {color: 'blue'}, 'Point_UTM')
Map.addLayer(point_buffered, {color: 'red'}, 'Point Buffered')
Map.addLayer(polygon_simple, {color: 'green'}, 'Polygon')
Map.addLayer(centroid, {color: 'black'}, 'Centroid')
