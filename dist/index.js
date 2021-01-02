"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.function.name.js");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _padStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/pad-start"));

var cat = 'May';

var arrow = function arrow() {
  var _context;

  return (0, _padStart["default"])(_context = "Name: ".concat(cat)).call(_context, 2);
};

var map = new _map["default"]();

var Cat = /*#__PURE__*/function () {
  function Cat(name) {
    (0, _classCallCheck2["default"])(this, Cat);
    this.name = name;
  }

  (0, _createClass2["default"])(Cat, [{
    key: "getName",
    value: function getName() {
      return;
    }
  }]);
  return Cat;
}();

var promise = new _promise["default"]();
promise.resolve('ok');

function asycFunc() {
  return _asycFunc.apply(this, arguments);
}

function _asycFunc() {
  _asycFunc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return promise();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _asycFunc.apply(this, arguments);
}