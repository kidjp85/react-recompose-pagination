"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateRange = exports.calculateRange = function calculateRange(currentIndex, displayRange, pagesArr) {
  if (pagesArr.length <= 2 * displayRange + 1 || pagesArr.length <= 1) return pagesArr;
  var maxIndex = pagesArr.length - 1;

  if (maxIndex - currentIndex < displayRange) {
    return pagesArr.slice(maxIndex - 2 * displayRange, maxIndex + 1);
  } else if (currentIndex < displayRange) {
    return pagesArr.slice(0, 2 * displayRange + 1);
  }

  return pagesArr.slice(currentIndex - displayRange, currentIndex + displayRange + 1);
};