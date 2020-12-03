import { repeatArray } from "./utils";

describe("repeatArray", () => {
  test("works with empty array", () => {
    expect(repeatArray([])).toEqual(undefined);
  });

  test("works with a random array", () => {
    expect(repeatArray([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  test("works with a random array with negative amount", () => {
    expect(repeatArray([1, 2, 3], -3)).toEqual([1, 2, 3]);
  });
});
