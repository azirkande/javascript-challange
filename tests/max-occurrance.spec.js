import { getMaximumOccurringNumberFromList } from '../src/max-occurrance';

describe("Test series of unbers to find divisors", () => {
    test.each([
      [[5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4] , [5,4]],
      [[1, 2, 3, 4, 5, 1, 6, 7] , [1]],
      [[1, 2, 3, 4, 5, 6, 7] , [1, 2, 3, 4, 5, 6, 7]],
    ])(
      "when different combinations of input numbers are_given",
      (input, expectedValue) => {
        const value = getMaximumOccurringNumberFromList(input);
        expect(value).toEqual(expect.arrayContaining(expectedValue));
        expect(value.length).toEqual(expectedValue.length);
      }
    );
  });
  