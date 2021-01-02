"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _padStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/pad-start"));

var _context2;

const cat = 'May';

const arrow = () => {
  var _context;

  return (0, _padStart.default)(_context = `Name: ${cat}`).call(_context, 2);
};

let map = new _map.default();

class Cat {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return;
  }

}

const a = (0, _includes.default)(_context2 = [1, 2]).call(_context2, 2);
var promise = new _promise.default();
promise.resolve('ok');

async function asycFunc() {
  await promise();
}