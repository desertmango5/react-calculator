// ignore keyboard keys pressed that do not
// have any calculator function

const keyboard = keyName => /(^p$|^m$|^x$|^d$|^n$|^s$|^ $|^Enter$|[0-9]+)/.test(keyName);

export default keyboard;
