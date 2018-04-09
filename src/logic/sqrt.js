import Big from 'big.js';

const sqrt = (numOne, operation) => {
  const one = Big(numOne);
  Big.DP = 5;
  Big.RM = 1;

  if (operation === '√') {
    return one.sqrt().toString();
  }
};

export default sqrt;
