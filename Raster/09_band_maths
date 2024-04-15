// Math on images

/*Earth Engine supports many basic mathematical operators. They share some common features. 
Earth Engine performs math operations per pixel. When an operator is applied to an image, 
it's applied to each unmasked pixel of each band. In the case of operations on two images, 
the operation is only applied at the locations where pixels in both images are unmasked. 
Earth Engine automatically matches bands between images. When an operator is applied to two images, 
the images are expected to have the same number of bands so they can be matched pairwise. 
However, if one of the images has only a single band, it is matched with all of the bands in the other image, 
essentially replicating that band enough times to match the other image.*/

var srtm = ee.Image("USGS/SRTMGL1_003")

var geometry =  ee.Geometry.Point([89.33279407371447, 27.27344093008286]);

//Center the map on the pre-defined geometry point.
Map.centerObject(geometry, 8)

// Suppose, you'd like to transform the SRTM elevation from meters to feet:
var srtmFeet = srtm.multiply(3.2808399);
// You can use all the basic arithmentic operations such as add, subtract, multiply, divide, pow (power of second), etc.

// Find all places higher than 500m.
var srtmgt500 = srtm.gt(500);
//Produces a binary 0/1 output, where 1=TRUE. 
// You can use .gt()=greater than, .lt()=less than, .gte() / .lte() greater/less than or equal to.

// Inspect the outputs on the map.
Map.addLayer(srtmFeet, {min:700, max:24000}, "SRTM in feet");
Map.addLayer(srtmgt500, {min:0, max:1, palette:["white", "red"]}, "Elev. > 500m");

// Use a static method for more complex computation.
var terrain = ee.Terrain.products(srtm);

// See in the console what you get as output.
print("Terrain", terrain);

/////////////////////////////////////////////////////////////////////////////////////

// Compute NDVI (Normalized Difference Vegetation Index) using the formula (NIR-RED)/(NIR+RED),
// for more info visit e.g. https://gisgeography.com/ndvi-normalized-difference-vegetation-index/

// Load a 5-year Landsat 7 composite.
var landsat1999 = ee.Image('LANDSAT/LE7_TOA_5YEAR/1999_2003');

// Do the NDVI calculation 
var ndvi1999 = landsat1999.select('B4').subtract(landsat1999.select('B3'))
               .divide(landsat1999.select('B4').add(landsat1999.select('B3')));
               
Map.addLayer(ndvi1999, {min:0, max:1, palette:["white", "green"]}, 'NDVI 1999', false);    

/*NB: The normalized difference operation is so common in remote sensing that Earth Engine provides a shortcut method, 
as will be shown later on.*/

// EXERCISE: add one of the terrain bands on the map.

