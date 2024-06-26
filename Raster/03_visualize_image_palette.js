// Adding color palettes on an image

/* Palettes let you set the color scheme for single-band images. A palette is a comma delimited list of 
color strings which are linearly interpolated between the maximum and minimum values in the visualization 
parameters (or defaults according to the band type, as described previously). For example, pixels less than 
or equal to the minimum will be displayed with the first color in the list; pixels greater than or equal to 
the maximum will be displayed with the last color in the list. Intermediate colors are linearly stretched 
to intermediate pixel values.*/

// Let's work with SRTM elevation data.
var srtm_image = ee.Image('CGIAR/SRTM90_V4');

// Zoom to a location. See how you can also set the map center with the command
// Map.setCenter as opposed to Map.centerObject. What is the difference?
Map.setCenter(-112.8598, 36.2841, 9); // Center on the Grand Canyon.

// Display the image on the map.
Map.addLayer(srtm_image, {}, 'no visualization');
// Empty curly brackets means no defined visulization parameters. The string in quotes appears as the Layer name.


//Suppose that through such experimentation, you determine that the data should be stretched to [0, 3000]. 
Map.addLayer(srtm_image, {min: 0, max: 3000}, 'custom visualization'); 

// To display a single band using a color palette, add a palette property to the visParams object, like below:

Map.addLayer(srtm_image, {min: 0, max: 3000, palette: ['blue', 'green', 'red']}, 'custom palette');

/* About palettes:

The colors are defined using the web standard CSS color value scheme 
(see https://en.wikipedia.org/wiki/Web_colors to learn more). 
Colors can be defined either with names (most common ones), e.g.:
palette: ['red', 'blue', 'green']

.. or as hexadecimal strings indicating the combination of red, green and blue.  
(RRGGBB values, see for example https://www.color-hex.com/), in this manner:
palette: ['000000', '00FFF0', '00FF00']*/
