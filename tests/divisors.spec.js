import { getDivisors } from "../src/positive-divisors";
describe("Test series of unbers to find divisors", () => {
  test.each([
    [60, [1, 2, 3, 4, 5, 6, 10, 12, 15,20, 30, 60] ],
    [42, [1, 2, 3, 6, 7, 14, 21, 42]],
    [0, [] ],
    [-12, [] ],
    [1, [1] ],
    [null, [] ],
    [undefined, [] ],
  ])(
    "when different combinations of input numbers are_given",
    (input, expectedValue) => {
      const value = getDivisors(input);
      expect(value.length).toEqual(expectedValue.length);
      expect(value).toEqual(expect.arrayContaining(expectedValue));
    }
  );
});
