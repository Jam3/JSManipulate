/* 
=========================================================================
   JSManipulate v1.0 (2011-08-01)

Javascript image filter & effect library

Developed by Joel Besada (http://www.joelb.me)
Demo page: http://www.joelb.me/jsmanipulate

MIT LICENSED (http://www.opensource.org/licenses/mit-license.php)
Copyright (c) 2011, Joel Besada
=========================================================================
*/

/**
 * A collection of all the filters.
 */
module.exports = {
	blur : require('./filters/blur')(),
	brightness : require('./filters/brightness')(),
	bump : require('./filters/bump')(),
	circlesmear : require('./filters/circlesmear')(),
	contrast : require('./filters/contrast')(),
	crosssmear : require('./filters/crosssmear')(),
	diffusion : require('./filters/diffusion')(),
	dither : require('./filters/dither')(),
	edge : require('./filters/edge')(),
	emboss : require('./filters/emboss')(),
	exposure : require('./filters/exposure')(),
	gain : require('./filters/gain')(),
	gamma : require('./filters/gamma')(),
	grayscale : require('./filters/grayscale')(),
	hue : require('./filters/hue')(),
	invert : require('./filters/invert')(),
	kaleidoscope : require('./filters/kaleidoscope')(),
	lensdistortion : require('./filters/lensdistortion')(),
	linesmear : require('./filters/linesmear')(),
	maximum : require('./filters/maximum')(),
	median : require('./filters/median')(),
	minimum : require('./filters/minimum')(),
	noise : require('./filters/noise')(),
	oil : require('./filters/oil')(),
	opacity : require('./filters/opacity')(),
	pinch : require('./filters/pinch')(),
	pixelate : require('./filters/pixelation')(),
	posterize : require('./filters/posterize')(),
	rgbadjust : require('./filters/rgbadjust')(),
	saturation : require('./filters/saturation')(),
	sawtoothripple : require('./filters/sawtoothripple')(),
	sepia : require('./filters/sepia')(),
	sharpen : require('./filters/sharpen')(),
	sineripple : require('./filters/sineripple')(),
	solarize : require('./filters/solarize')(),
	sparkle : require('./filters/sparkle')(),
	squaresmear : require('./filters/squaresmear')(),
	threshold : require('./filters/threshold')(),
	triangleripple : require('./filters/triangleripple')(),
	twirl : require('./filters/twirl')(),
	vignette : require('./filters/vignette')(),
	waterripple : require('./filters/waterripple')(),
	utils: require('./utils')()
};