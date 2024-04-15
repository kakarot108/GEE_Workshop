// How to find image metadata?

// Load an image.
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318');

// Get information about the bands as a list.
var bandNames = image.bandNames();
print('Band names: ', bandNames); // ee.List of band names

// Get projection information from band 1.
var b1proj = image.select('B1').projection();
print('Band 1 projection: ', b1proj); // ee.Projection object

// Get scale (in meters) information from band 1.
var b1scale = image.select('B1').projection().nominalScale();
print('Band 1 scale: ', b1scale); // ee.Number

// Note that different bands can have different projections and scale.
var b8scale = image.select('B8').projection().nominalScale();
print('Band 8 scale: ', b8scale); // ee.Number

// Get a list of all metadata properties.
var properties = image.propertyNames();
print('Metadata properties: ', properties); // ee.List of metadata properties

// Get a specific metadata property.
var cloudiness = image.get('CLOUD_COVER');
print('CLOUD_COVER: ', cloudiness); // ee.Number

// Get the timestamp and convert it to a date.
var date = ee.Date(image.get('system:time_start'));
print('Timestamp: ', date); // ee.Date

Map.addLayer(image, {'min': 6000, 'max': 12500, 'bands': ['B4', 'B3', 'B2']}, "Image under inspection");
Map.centerObject(image, 7);
    
