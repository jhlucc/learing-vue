type IOperator='plus' | 'minus' | 'multiply' | 'divide';

// type ICalculator = (operator:IOperator, ...args:number[]) => number;

interface ICalculator{
  (operator:IOperator, ...args:number[]) : number;
  plus: (number1: number, number2: number) => number;
  minus: (number1: number, number2: number) => number;
  multiply: (number1: number, number2: number) => number;
  divide: (number1: number, number2: number) => number;
}
declare const calculator: ICalculator;

