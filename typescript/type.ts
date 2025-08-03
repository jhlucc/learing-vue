let code :string =`gekk`

let number :number = 42;
let isTrue :boolean = true;

let list :number[] = [1, 2, 3];
let tuple :[string, number] = ['hello', 10];

let u :undefined = undefined;
let n :null = null;
let anyValue :any = 'anything can go here';

list.push(4);
// list.push(1,32);
let voidFunction = (): void => {
    console.log('This function does not return anything');
};


let as : [string, number, boolean] = ['test', 1, true]; // tuple  

as.push('extra'); // This will cause an error if strict tuple checking is enabled 只能push 两种类型中的一种 

function test() {
  console.log(arguments)

}

