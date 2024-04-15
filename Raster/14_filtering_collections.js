/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var point = /* color: #d63000 */ee.Geometry.Point([-120.84778632253261, 37.40357865909927]),
    area = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-118.55164374440761, 37.38612206045555],
          [-118.50769843190761, 36.69334179400437],
          [-114.25598944753261, 36.58755715001913],
          [-114.39881171315761, 37.438479657867056],
          [-118.67249335378261, 37.40357865909927]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Spatial and temporal filtering

// Apply some filters on image collections.

// Below an example of filtering an image collection 
// to a specific time frame and location by WRS path and row.
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1')
    .filterDate('2014-03-01', '2014-08-01')
    .filter(ee.Filter.eq('WRS_PATH', 44))
    .filter(ee.Filter.eq('WRS_ROW', 34));


// Same with a point geometry filter 
// (point was created with the "Add a marker" tool, see top left corner of the map view.)
var collection2 = ee.ImageCollection('LANDSAT/LC08/C01/T1')
.filterDate('2014-03-01', '2014-08-01')
.filterBounds(point);    // point is the name of the point geometry, see variables at the top


// Also a polygon geometry can be used 
// (polygon was created with the "Draw a shape" tool):
var collection3 = ee.ImageCollection('LANDSAT/LC08/C01/T1')
.filterDate('2014-03-01', '2014-08-01')
.filterBounds(area);    // area is the name of the polygon 

// Filter by area and cloud cover
var collection4 = ee.ImageCollection('LANDSAT/LC08/C01/T1')
.filterDate('2014-03-01', '2015-08-01')
.filterBounds(area)
.filter(ee.Filter.lt('CLOUD_COVER', 10)) // Less than 10% cloud cover
.sort('system:time_start', false) //Sort by acquisition date, newest on top

// Add the above collections to the map view:
// Center the map on the filtered collection with map.CenterObject() (an option for Map.SetCenter)
Map.centerObject(collection2, 7);

// Call Map.addLayer for each of the collections. See how you can name a layer at the end of each line.
Map.addLayer(collection, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000}, 'with WRS filter');
Map.addLayer(collection2, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000}, 'with point filter');
Map.addLayer(collection3, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000}, 'with polygon filter');
Map.addLayer(collection4, {'bands': ['B4', 'B3', 'B2'], 'min': 5000, 'max': 18000}, 'with cloud filter');


 /* EXERCISE:
 using your Sentinel-2 image collection example from previous script, filter it with either a point or area 
 geometry of your choice (you can modify the previous script or add to this one.)
 */
 
