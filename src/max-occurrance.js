export const  getMaximumOccurringNumberFromList = (array) => {
    if (array.length == 0) return null;
    let numberOccurranceMap = {},
      maxCount = 1,
      maxOccurrances = [];
  
    for (let num = 0; num < array.length; num++) {
      const currentNum = array[num];
  
      if (numberOccurranceMap[currentNum] == null) numberOccurranceMap[currentNum] = 1;
      else numberOccurranceMap[currentNum]++;
  
      if (numberOccurranceMap[currentNum] > maxCount) {
        maxOccurrances = [currentNum];
        maxCount = numberOccurranceMap[currentNum];
      } else if (numberOccurranceMap[currentNum] == maxCount) {
        maxOccurrances.push(currentNum);
        maxCount = numberOccurranceMap[currentNum];
      }
    }
    return maxOccurrances;
  };