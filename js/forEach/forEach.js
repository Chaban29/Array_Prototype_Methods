'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers[20] = 20;

Array.prototype.forEachTwo = function (callback, thisArg) {
  let obj = Object(this);
  let len = obj.length;
  let iter = 0;
  let context = this;

  console.log(obj);

  if (this == null) {
    throw new Error("Can't iterate over undefined or null");
  }

  if (typeof callback !== 'function') {
    throw new Error('callback is not a function');
  }

  if (arguments.length > 1) {
    context = thisArg;
  }

  while (iter < len) {
    if (iter in obj) {
      callback.call(context, this[iter], iter, obj);
    }
    iter++;
  }
};

numbers.forEachTwo((item, index, array) => {
  console.log({ item, index });
});
