var Lib = require("./lib");

describe("The test library", () => {
  describe("does math by", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(Lib.easySum(1, 2)).toBe(3);
    });

    test("mods 1 & 2 should not return 3", () => {
      expect(Lib.easyMod(1, 2)).not.toBe(3);
    });

    test("mods 1 & 2 should return 1", () => {
      expect(Lib.easyMod(1, 2)).toBe(1);
    });
  });
  describe("does calendar work", () => {
    test("getMonth should return 1", () => {
      var d = new Date(2021, 1, 1);
      var n = d.getMonth();
      expect(n).toBe(1);
    });
    test("monthDiff 1 & 2 to return 16", () => {
      var date1 = new Date(2021, 10, 1);
      var date2 = new Date(2021, 11, 5); // February 1st, 2010
      expect(Lib.monthDiff(date1, date2)).toBe(1);
    });
    test("getMonthsBetween 1 & 2 with round up", () => {
      var date1 = new Date(2021, 1, 1);
      var date2 = new Date(2021, 2, 12);
      expect(Lib.getMonthsBetween(date1, date2, true)).toBe(2);
    });
    test("getMonthsBetween 1 & 2 without round up", () => {
      var date1 = new Date(2021, 1, 1);
      var date2 = new Date(2021, 2, 12);
      expect(Lib.getMonthsBetween(date1, date2, false)).toBe(1);
    });
  });
});
