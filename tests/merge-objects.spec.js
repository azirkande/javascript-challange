import { mergeDuplicateObjectsFromArray } from '../src/merge-objects';

describe('merge users array with distinct values',  () => {
    
    test('when_null_input_is_given', () => {
        const output = mergeDuplicateObjectsFromArray(null);
        expect(output).toEqual({})
      });
    
      test('when_undefined_input_is_given', () => {
        const output = mergeDuplicateObjectsFromArray(undefined);
        expect(output).toEqual({});
      });

      test('when_array_with_name_property_is_given', () => {
        const users = [
          { id: 1, name: 'bob' },
          { id: 2, name: 'sally' },
          { id: 3, name: 'bob', age: 30}];
        const output = mergeDuplicateObjectsFromArray(users,'name');
        expect(output['bob'].length).toBe(2);
        expect(output['sally'].length).toBe(1);

      });
      test('when_array_with_invalid_propetry_is_given', () => {
        const users = [
          { id: 1, name: 'bob' },
          { id: 2, name: 'sally' },
          { id: 3, name: 'bob', age: 30}];
        const output = mergeDuplicateObjectsFromArray(users,'sdfsfsdf');
        expect(output).toEqual({});
      });
});