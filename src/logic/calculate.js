import operator from './operator';
import sqrt from './sqrt';
import isNumber from './isNumber';

const calculate = (obj, buttonName) => {
  if (buttonName === 'c') {
    return {
      next: null,
      operation: null,
      total: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // if operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    // if single number in next, concat next number
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    // next = null, operation = null
    return {
      next: buttonName,
      total: null,
    };
  }

  // deal with a decimal point
  if (buttonName === '.') {
    if (obj.next) {
      // if already a decimal, ignore click
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    // add leading zero
    if (!obj.next) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operator(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } 
      return {};
  }

  if (buttonName === '√') {
    if (obj.next) {
      return {
        total: sqrt(obj.next, '√'),
        next: null,
        operation: null,
      };
    }
    if (obj.total) {
      return {
        total: sqrt(obj.total, '√'),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '±') {
    if (obj.next) {
      return {
        next: (-1 * parseFloat(obj.next)).toString(),
      };
    }
    if (obj.total) {
      return {
        total: (-1 * parseFloat(obj.total)).toString(),
      };
    }
    return {};
  }

  if (obj.operation) {
    return {
      total: operator(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (obj.operation) {
    return {
      total: operator(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (obj.total) {
    if (!obj.next && !obj.operation) {
      return {
        total: obj.total,
        next: null,
        operation: buttonName,
      };
    }
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
