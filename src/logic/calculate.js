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

  // TODO: when operation button clicked twice, generates error. Fix.

  // prevent setting operation when state is null
  if (!isNumber(buttonName) && !obj.next && !obj.total && buttonName !== '.') {
    return {};
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

  // DECIMAL POINT
  if (buttonName === '.') {
    if (obj.next) {
      // if already a decimal, ignore click
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    // ADD ZERO TO FRONT OF DECIMAL
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

  // EQUALS
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

  // SQUARE ROOT
  if (buttonName === '√') {
    if (obj.next) {
      return {
        total: sqrt(obj.next, '√'),
        next: null,
        operation: null,
      };
    }
    // RETURN SQRT AFTER EQUAL BUTTON CLICKED
    if (obj.total) {
      return {
        total: sqrt(obj.total, '√'),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  // TOGGLE POSITIVE/NEGATIVE VALUES
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

  // WHEN OPERATION BUTTON CLICKED, NEXT ==> TOTAL
  // EXCLUDES SQRT AND PLUS/MINUS BUTTONS
  if (obj.operation) {
    return {
      total: operator(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // USE RESULT OF PREVIOUS CALCULATION WITHOUT CLEARING DISPLAY
  // TO PERFORM NEW CALCULATION
  if (obj.total) {
    if (!obj.next && !obj.operation) {
      return {
        total: obj.total,
        next: null,
        operation: buttonName,
      };
    }
  }

  // MOVE NEXT VALUE TO TOTAL
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
