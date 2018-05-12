var Log = require("../log.js").Log;
var BoxParser = require('../box.js').BoxParser;

BoxParser.mehdBox.prototype.parse = function(stream) {
	this.parseFullHeader(stream);	
	if (this.flags & 0x1) {
		Log.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
		this.version = 1;
	}
	if (this.version == 1) {
		this.fragment_duration = stream.readUint64();
	} else {
		this.fragment_duration = stream.readUint32();
	}
}

