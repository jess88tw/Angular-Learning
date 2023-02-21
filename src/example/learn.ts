// ts interface example
interface Animal {
  name: string;
  weight: number;
  survive: boolean;
  run?(): void; // 可以加上 ? 變成可選方法
  swim?(): void;
}

class Dog implements Animal {
  name: string;
  survive: boolean;
  weight: number;
  run(): void {
    console.log(this.name + '.run');
  }

  constructor(name: string, survive: boolean, weight: number) {
    this.name = name;
    this.survive = survive;
    this.weight = weight;
  }
}

class Fish implements Animal {
  name: string;
  survive: boolean;
  weight: number;
  swim(): void {
    console.log(this.name + '.swim');
  }

  constructor(name: string, survive: boolean, weight: number) {
    this.name = name;
    this.survive = survive;
    this.weight = weight;
  }
}

let dogA = new Dog('Jess', true, 20);
// dogA.run();

let fishA = new Fish('Jack', false, 10);
// fishA.swim();

// ts array example
const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4, 5];
const numArray3: Array<number | string> = [1, 2, 3, 'a', 5];
const numArray4: Array<any> = [1, 2, 3, 'a', 5];
// console.log(numArray4);

// ts function example
function sum(x: number, y: number): number {
  return x + y;
}

// console.log(sum(1,2));

// ts loop example
let total = 0;

numArray1.forEach((x) => {
  total = sum(total, x);
});

console.log(total);
