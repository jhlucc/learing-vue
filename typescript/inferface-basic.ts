interface Person {
  name: string;
  age: number;
  isEmployed?: boolean; // Optional property

}

interface Em  extends Person {
  email: string;
}


function PrintEm (em: Em): void {
  console.log(`Name: ${em.name}, Age: ${em.age}, Email: ${em.email}`);
  if (em.isEmployed !== undefined) {
    console.log(`Employed: ${em.isEmployed}`);
  }
}



function addNumbers(a: number, b: number): number {
  return a + b;
}

addNumbers(5, 10); // Returns 15





//联合类型

let  str1 : string | number = 'hello';

let mixed: (string | number)[] = ['hello', 42, 'world'];

str1.toString(); // Valid, as str is a string



