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







