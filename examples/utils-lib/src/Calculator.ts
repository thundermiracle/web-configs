class Calculator {
  Add(num1: number, num2: number) {
    return num1 + num2;
  }

  Subtract(num1: number, num2: number) {
    return num1 - num2;
  }

  Multiply(num1: number, num2: number) {
    return num1 * num2;
  }

  Divide(num1: number, num2: number) {
    return num1 / num2;
  }
}

const calculator = new Calculator();

export default calculator;
