const { sum } = require("./mathFunctions"); //node imports like this
//hope this helps a little
// Manual Testing to run test in terminal type: node mathFunctions.test.js
// let expected = 4;
// let first = 2;
// let second = 2;

// let actual = sum(first, second);

// if (actual !== expected) {
//   console.log(
//     `TEST FAILURE: actual value of ${actual} does not match expected value of ${expected}`
//   );
// }

//jest tests import jest <npm add -D jest>

//node_modules/.bin/jest - will run tests

//added below to package.json
// "scripts": {
//     "test": "jest" / "test" : "jest --watchAll" is another option which will auto run all tests
//   },
// now can run npm test instead of node_modules/.bin/jest

// describe("sum function", () => {
//   it("adds two numbers", () => {
//     // Arrange
//     let expected = 4;
//     let first = 2;
//     let second = 2;

//     // Act
//     let actual = sum(first, second);

//     // Assert
//     expect(actual).toBe(expected);
//   });
// });

//another way to write jest tests
// test("it adds two numbers", () => {
//   // Arrange
//   let expected = 4;
//   let first = 2;
//   let second = 2;

//   // Act
//   let actual = sum(first, second);

//   // Assert
//   expect(actual).toBe(expected);
// });

// less verbose way to write the jest test
test("it adds two numbers", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(5, 6)).toBe(11);
  expect(sum(5, 7)).not.toBe(12);
});
