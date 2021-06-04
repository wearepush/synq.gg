const isEmpty = (value) => value === undefined || value === null || value === '' || !value; // eslint-disable-line
const join = (rules) => (value, data) =>
  rules.map((rule) => rule(value, data)).filter((error) => !!error)[0]; // eslint-disable-line

export function email(value) {
  // eslint-disable-line
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function required(value) {
  // eslint-disable-line
  if (isEmpty(value)) {
    return 'This field is required';
  }
}

export function createValidator(rules, section, activate) {
  return (data = {}) => {
    data = section && data.section ? data[section] : data; // eslint-disable-line
    if (activate && typeof data[activate] !== 'undefined') {
      if (!data[activate]) {
        return {};
      }
    }
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
