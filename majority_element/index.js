const majorityElement = (arr) => {
  const hash = {};
  let max = 0;
  let val;
  for (let num of arr) {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }

    if (hash[num] > max) {
      max = hash[num];
      val = num;
    }
  }
  return val;
};

const majorityElement_v2 = (arr) => {
  return arr.sort()[Math.floor(arr.length / 2)];
};

export default majorityElement;
