# Podst

[![GitHub version](https://badge.fury.io/gh/davgeek%2Fpodst.svg)](https://badge.fury.io/gh/davgeek%2Fpodst)

**Work in progress**

A podcast publishing app made in Node.js to share your stories with the world.

## Features
- Simple Administration Interface
- Theming support with Jade
- Authentication 
- Ready to deploy in Heroku/Dokku

## Configuration
To configure your Podst copy example.config.js file to config.js and edit:

```bash
// MongoDB URI
exports.mongodb = {
    uri: process.env.MONGO_URI || 'mongodb://localhost/podst'
};

exports.title = 'Podst Podcasts';
exports.description = 'A podcast publishing app made in Node.js to share your stories with the world';
exports.theme = 'default';

exports.port = process.env.PORT || 3000;
// Secret text for Cookies, encrypt, etc.
exports.secretText = 'yoursecretText';
```

## TODO
 - [ ] Tests
 - [ ] Scroll loading
 - [ ] S3 direct upload
 - [ ] Add team users
 - [ ] Integrate RSS feed for podcasts

## Licence
MIT

Developed by Dav Lizarraga <a href="twitter.com/davgeek">@davgeek</a>
