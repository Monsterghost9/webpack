
*/

"use strict";

const { applyWebpackOptionsDefaults } = require("./config/defaults");
const { getNormalizedWebpackOptions } = require("./config/normalization");

class WebpackOptionsDefaulter {
	process(options) {
		options = getNormalizedWebpackOptions(options);
		applyWebpackOptionsDefaults(options);
		return options;
	}
}

module.exports = WebpackOptionsDefaulter;
