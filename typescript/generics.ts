function  echo (arg:number): number {
    return arg;
}


function echoString(arg: string): string {
    return arg;
}


function echoArray<T>(arg: T[]): T[] {
    return arg;
}



function Print<T>(arg: T): T {
    console.log(arg);
    return arg;
}

let a:number = 5;
Print(a);

let b:string = 'hello';

Print(b);


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}




