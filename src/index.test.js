// @flow strict

import filterNulls from "./index";

describe("filterNulls()", () => {
  describe("Given array with nulls", () => {
    it("should return only the value", () => {
      const arr = [1, 2, null, 3];
      const result: Array<number> = filterNulls(arr);
      expect(result).toEqual([1, 2, 3]);
    });
  });
  describe("Given array of nulls", () => {
    it("should return an empty array", () => {
      const arr = [null, null, null, null];
      const result = filterNulls(arr);
      expect(result).toEqual([]);
    });
  });
});
