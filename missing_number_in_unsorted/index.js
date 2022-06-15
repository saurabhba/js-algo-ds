const missingInUnsorted = (arr, lowerBound, upperBound) => {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
};

export default missingInUnsorted;
