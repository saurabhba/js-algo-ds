const missingNumbers_v1 = (arr) => {
  const missing = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
};

const missingNumbers = (arr) => {
  const missing = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      for (let j = arr[i - 1] + 1; j < arr[i]; j++) {
        missing.push(j);
      }
    }
  }

  return missing;
};

export default missingNumbers;
