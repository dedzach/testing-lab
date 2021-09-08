const {returnTwo, greeting, add, multiply, subtract, divide } = require("./functions");

test ("should return 2", () => {
    expect(returnTwo(2)).toEqual(2);
});

test ("Should return Hello, {name}.", () => {
    expect(greeting('Zach')).toEqual('Hello, Zach.');
});

test ("Should return sum num1 + num2", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
});

test ("Should return the product of num1 * num2", () => {
    expect(multiply(5, 5)).toEqual(25);
});

test ("Should return the difference of num1 - num2", () => {
    expect(subtract(5, 5)).toEqual(0);
});

test ("Should equal the quotient of num1 / num2", () => {
    expect(divide(4, 2)).toEqual(2);
});

describe ('Math Functions', () => {
    it ("Should return sum num1 + num2")
}