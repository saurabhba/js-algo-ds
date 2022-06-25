const twoSum_v1 = (arr, goal) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        return [i, j];
      }
    }
  }
  return [];
};

const twoSum_v2 = (arr, goal) => {
  for (let i = 0; i < arr.length; i++) {
    const remainingNum = goal - arr[i];
    if (remainingNum !== arr[i] && arr.includes(remainingNum)) {
      return [i, arr.indexOf(remainingNum)];
    }
  }
  return [];
};

const twoSum = (arr, goal) => {
  const map = new Map();
  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];
    if (map.get(num) !== undefined) {
      return [map.get(num), index];
    }
    map.set(goal - num, index);
  }
  return [];
};

export default twoSum;
