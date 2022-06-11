const fizzbuzz_v1 = (num) => {
  var result = [];
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result.join("");
};

const fizzbuzz = (num) => {
  return Array.from({ length: num }, (v, i) => i + 1)
    .map((number) => {
      let result = number;
      if (number % 3 === 0) {
        result = "fizz";
      }
      if (number % 5 === 0) {
        result = "buzz";
      }

      if (number % 15 === 0) {
        result = "fizzbuzz";
      }

      return result;
    })
    .join("");
};

export default fizzbuzz;
