function evaluateCallback(numberArray, callbackFunction) {
  // let result;
  // for (const number of numberArray) {
  //   result = callbackFunction(number);

  //   if (result === true) {
  //     return true;
  //   }
  // }

  // return false;

  return numberArray.some(callbackFunction);
}

module.exports = evaluateCallback;
