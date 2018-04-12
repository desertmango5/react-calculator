// ignore keyboard keys pressed that do not
// have any calculator function

const keyboardTest = keyName => /(^p$|^m$|^x$|^d$|^n$|^s$|^ $|^Enter$|^0$|^1$|^2$|^3$|^4$|^5$|^6$|^7$|^8$|^9$|^.$)/.test(keyName);

export default keyboardTest;
