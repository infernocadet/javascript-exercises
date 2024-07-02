const removeFromArray = function (myArray, ...args) {
  return myArray.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
