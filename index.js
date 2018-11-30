'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _read = require('./lib/read');

Object.defineProperty(exports, 'Reader', {
  enumerable: true,
  get: function () {
    return _read.Reader;
  }
});

var _write = require('./lib/write');

Object.defineProperty(exports, 'Writer', {
  enumerable: true,
  get: function () {
    return _write.Writer;
  }
});