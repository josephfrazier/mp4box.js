var Log = require("../../log.js").Log;
var BoxParser = require('../../box.js').BoxParser;

BoxParser.tsasSampleGroupEntry.prototype.parse = function(stream) {
	Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
}

