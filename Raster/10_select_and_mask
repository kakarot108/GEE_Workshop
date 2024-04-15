//Extracting a single band, masking out null values.

var forest = ee.Image("UMD/hansen/global_forest_change_2017_v1_5");

// Select the band called 'loss' out of the Hansen data set (see imports).
var loss = forest.select('loss');

// Add only that band to the map view.
Map.addLayer(loss,{ min: 0, max:1}, "loss", false);

// How to make null values transparent?
// Mask the band with itself to remove zeros.
Map.addLayer(loss.updateMask(loss), {palette: 'red'}, 'masked loss');

// Inspect the result on the map view and find information about the call updateMask() in the Docs tab.

