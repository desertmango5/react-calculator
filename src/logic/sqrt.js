import Big from 'big.js';

const sqrt = (numOne, operation) => {
  const one = Big(numOne);
  Big.DP = 5;
  Big.RM = 1;

  if (operation === '√') {
    if (one > 0) {
      return one.sqrt().toString();
    }
    return 'Error';
  }
};

export default sqrt;
