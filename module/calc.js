const calculate = (args) => {
  let num1 = parseInt(args[3]);
  let num2 = parseInt(args[5]);
  let sign = args[4];

  switch (sign) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      return 0;
  }
};
module.exports = { calculate };
