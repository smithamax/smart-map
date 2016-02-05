'use strict';

var smartMap = exports.smartMap = function (fn, obj) {
  if (obj == null) return obj;
  if (Array.isArray(obj)) return obj.map(fn);
  return fn(obj);
}

exports.smartMapify = function (fn) {
  return smartMap.bind(null, fn);
};
