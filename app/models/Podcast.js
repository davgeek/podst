/* Model: Podcast */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var podcastSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: String,
	audio: {
		url: String,
		type: String
	},
	author: String,
	duration: Number,
	image: String,
	slug: { type: String, unique: true }
	created_at: Date,
	updated_at: Date
});

podcastSchema.pre('save', function (next) {
	var currentDate = new Date();
	this.updated_at = currentDate;
	if (!this.created_at) {
		this.created_at = currentDate;
	}
	next();
});

module.exports = mongoose.model('Podcast', podcastSchema);