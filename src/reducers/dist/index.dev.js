"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _products = _interopRequireDefault(require("./products"));

var _cart = _interopRequireDefault(require("./cart"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myReducer = (0, _redux.combineReducers)({
  products: _products["default"],
  cart: _cart["default"],
  message: _message["default"]
});
var _default = myReducer;
exports["default"] = _default;