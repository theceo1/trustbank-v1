import '@testing-library/jest-dom/extend-expect';
global.setImmediate = (fn, ...args) => {
  return setTimeout(fn, 0, ...args);
};
global.clearImmediate = (id) => {
  return clearTimeout(id);
};
