// import { Stack } from "./Stack";

// const pilha = new Stack<number>();


// pilha.push(5);
// pilha.push(10);
// pilha.push(15);
// pilha.push(20);
// pilha.push(25);
// pilha.push(30);

// console.log(" - - - - - - -")

// pilha.pop();
// pilha.visualize();

// const isEmpty = pilha.isEmpty();
// console.log(isEmpty);

// console.log(pilha.peek());


import { Queue } from "./Queue";

const fila = new Queue<number>();

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
fila.enqueue(5);
fila.visualize();
console.log("- - - - - - - - - - - -");

fila.dequeue();
fila.dequeue();
console.log(fila.isEmpty())
console.log(fila.peek())
fila.visualize();






