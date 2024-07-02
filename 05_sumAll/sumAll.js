const sumAll = function (numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "ERROR";
  }

  if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  }

  let first;
  let end;
  let total = 0;
  if (numOne >= numTwo) {
    first = numOne;
    end = numTwo;
  } else {
    first = numTwo;
    end = numOne;
  }

  for (first; first > end - 1; first--) {
    total += first;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
