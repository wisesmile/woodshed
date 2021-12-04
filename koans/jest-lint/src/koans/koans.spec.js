describe("the JavaScript language", () => {
  describe("my beverage", () => {
    const myBeverage = {
      delicious: true,
      sour: false,
    };

    test("is delicious", () => {
      expect(myBeverage.delicious).toBeTruthy();
    });

    test("is not sour", () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });
});
