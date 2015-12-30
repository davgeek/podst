/* Config.js */

// MongoDB URI
exports.mongodb = {
    uri: process.env.MONGO_URI || 'mongodb://localhost/podst'
};

// App port
exports.port = process.env.PORT || 3000;

// Secret text for Cookies, encryptio, etc.
exports.secretText = 'yoursecretText';