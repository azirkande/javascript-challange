// Question7 : Write a function which combines an array of objects

export const mergeDuplicateObjectsFromArray = (arrayOfObjects, keyNameToMerge) => {
  if (arrayOfObjects === null || arrayOfObjects === undefined) return {};

  const result = arrayOfObjects.reduce((acc, record) => {
    const propertyName = record[keyNameToMerge];
    if( record && propertyName) {
      if (!acc[propertyName]) {
        acc[propertyName] = [record];
      } else {           
        acc[propertyName].push(record);
      }
    } 
    return acc;
  }, {});

  return result;
};

