"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = filterNulls;

function filterNulls(array) {
  return array.filter(function (item) {
    return item != null;
  }).filter(Boolean);
}