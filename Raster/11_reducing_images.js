// Spatial reducers
// https://developers.google.com/earth-engine/reducers_intro

/* A reducer is an Earth Engine object that represents a way of aggregating data or computing a statistic.  
Reducers return a dictionary that can be printed in the Console.*/

var srtm = ee.Image("USGS/SRTMGL1_003")

var aoi = ee.Geometry.Polygon(
        [[[89.34378040183947, 27.66286476626324],
          [89.10757434715197, 27.331527307499726],
          [89.15151965965197, 26.940447483209727],
          [89.51956165183947, 26.84736546455001],
          [89.87112415183947, 26.832661296192054],
          [90.10733020652697, 27.09215321122245],
          [90.11831653465197, 27.41445511],
          [89.98098743308947, 27.599598013190853],
          [89.66787708152697, 27.716369589226815],
          [89.40969837058947, 27.68232409912228]]]);

// Create terrain variables out of SRTM elevation model.
var terrain = ee.Terrain.products(srtm);

// Calculate the mean of slope in the pre-defined AOI (see imports at the top).
// The reduceRegion() reducer gives statistics for a predefined region.
var slopeMean = terrain.select('slope').reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: aoi,
  scale: 30 });

// print the result.  
print('Mean slope in AOI', slopeMean);

// Find all places higher than 500m.
var srtmgt500 = srtm.gt(500);

// Compute area of elevations higher than 500m in square meters
// Generates an image in which the value of each pixel is the area of that pixel in square meters.
var area = srtmgt500.multiply(ee.Image.pixelArea()) 

area = area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30 });

print(ee.Image.pixelArea());  
print('Area sqm', area);  

// EXERCISE 1: Break things by un commenting the lines below 

// var error = terrain.select('slope').reduceRegion({
//   reducer: ee.Reducer.mean(),
//   geometry: aoi,
//   scale: 1 }); // scale is set to 1m
  
// print('Bad attempt', error);  

/* EXERCISE 2: Fix things!

It's ridiculous to do this in the first place, but you can do it because Earth Engine will resample the input 
(nearest neighbor by default) to whatever scale you specify.  
So we're getting 900 little pixels in each native 30 meter pixel.

Fix 1: change scale back to 30.
Fix 2: add maxPixels: 1e9 to the reduceRegion() arguments.
Fix 3: add bestEffort: true to the reduceRegion() arguments.

Setting bestEffort will recompute scale such that maxPixels is not exceeded.  This is useful for quick and dirty 
statistics, but not much else, since you won't know the scale at which your computation occured.

The scale of the computation is set from the output.  Inputs are resampled as necessary to the scale set in the output.  Always specify scale!
The scale parameter is always in meters. */

// EXERCISE 3: Find out the mean elevation of the AOI.
