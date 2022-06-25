const evaluateCallback = require("./index");

describe("evaluateCallback", () => {
  it("It should return true when testing num === 2 function with [1, 2, 3]", () => {
    const testFunction = function (num) {
      return num === 2;
    };

    const result = evaluateCallback([1, 2, 3], testFunction);

    expect(result).toEqual(true);
  });

  it("It should return false when testing num === 2 function with [1, 5, 3]", () => {
    const testFunction = function (num) {
      return num === 2;
    };

    const result = evaluateCallback([1, 5, 3], testFunction);

    expect(result).toEqual(false);
  });

  it("It should return true when testing num % 2 === 0 function with [1, 2, 3]", () => {
    const testFunction = function (num) {
      return num % 2 === 0;
    };

    const result = evaluateCallback([1, 2, 3], testFunction);

    expect(result).toEqual(true);
  });

  it("It should return false when testing num % 2 === 0 function with [1, 5, 3]", () => {
    const testFunction = function (num) {
      return num % 2 === 0;
    };

    const result = evaluateCallback([1, 5, 3], testFunction);

    expect(result).toEqual(false);
  });
});
