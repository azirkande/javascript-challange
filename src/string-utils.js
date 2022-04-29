
//Question 1: Using the most appropriate means, implement an "isNullOrEmpty" check on the standard String type. 


export const isNullOrEmpty = (input) => {
  const spaceRegexPattern = /^\s*$/g;
  if((typeof input) !== 'string')
     return true;
  if (input === "") return true;
  const replacedInput = input.replace(spaceRegexPattern, "");
  return replacedInput.length === 0;
};


