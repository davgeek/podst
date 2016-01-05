/* Config.js */

// MongoDB URI
exports.mongodb = {
    uri: process.env.MONGO_URI || 'mongodb://localhost/podst'
};

exports.title = 'Podst Podcasts';
exports.description = 'A podcast publishing app made in Node.js to share your stories with the world';
exports.theme = 'default';

exports.port = process.env.PORT || 3000;
// Secret text for Cookies, encryptio, etc.
exports.secretText = 'yoursecretText';