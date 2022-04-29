import { isNullOrEmpty } from '../src/string-utils';

describe('Test series of string input',  () => {
    test.each([
        [[1,2,3,4], true ],
        [3453543, true ],
        [{s:'a', a:'aa'}, true ],
        ['', true ],
        ['           ', true ],
        [' sddsdsd  ', false ],
        ['null', false ],
        [null, true ],
        [undefined, true ]      
      ])('when_diff_string_inputs_are_given', (input, expectedValue) => {
        const value = isNullOrEmpty(input);
        expect(value).toBe(expectedValue);

      });
    
});