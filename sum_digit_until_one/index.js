const sumDigits_v1 = (num) => {
  // Convert number to string
  var str = num.toString();

  // Convert string to array
  var arr = str.split("");

  // Use JS array reduce function to sum all digits (inside reduce convert char to digit)
  var sum = arr.reduce((total, ele) => total + parseInt(ele), 0);

  // Use recursive method call
  if (sum > 9) {
    return sumDigits(sum);
  }
  return sum;
};

const sumDigits = (num) => {
  if (num < 10) {
    return num;
  }

  var sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sumDigits(sum);
};

export default sumDigits;
