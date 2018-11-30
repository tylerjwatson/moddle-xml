'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasLowerCaseAlias = hasLowerCaseAlias;
exports.serializeAsType = serializeAsType;
exports.serializeAsProperty = serializeAsProperty;
function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

var DEFAULT_NS_MAP = exports.DEFAULT_NS_MAP = {
  'xsi': 'http://www.w3.org/2001/XMLSchema-instance'
};

var XSI_TYPE = exports.XSI_TYPE = 'xsi:type';

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}