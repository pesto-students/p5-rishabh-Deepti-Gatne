const functions = require('./functions.js');

test('adds properly', () => {
    expect(functions.sum(1, 5)).toBe(6);
});

test('subtracts properly', () => {
    expect(functions.subtract(3, 2)).toBe(1);
});