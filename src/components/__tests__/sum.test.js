import { sum } from "../sum";
import "@testing-library/jest-dom";

test("checking the sum of 2 numbers", () => {
  const tot = sum(4, 2);
  expect(tot).toBe(6);
});
