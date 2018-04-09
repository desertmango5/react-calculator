import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const one = Big(numOne);
  const two = Big(numTwo);
  Big.DP = 5;
  Big.RM = 1;
  
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '×') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    return one.div(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
};

export default operate;
