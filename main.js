module.exports = function venom(obj) {
  const types = {
    number: Number.prototype,
    object: obj,
    string: String.prototype,
  };

  const type = typeof obj;

  types[type] = Array.isArray(obj) ? Array.prototype : types[type];

  const functions = Object.getOwnPropertyNames(types[type]);

  functions.forEach((value) => {
    try {
      types[type][value] = () => 'We are Venom';
      // eslint-disable-next-line no-empty
    } catch (e) {}
  });
};
