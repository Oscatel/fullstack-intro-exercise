import { logData, expectedResult, computeSuccessRatio } from "../src/code-test";

test("result is as expected", () => {
  expect(computeSuccessRatio(logData)).toStrictEqual(expectedResult);
});
