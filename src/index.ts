// TS10 code example

// Line 1
class Person {
    constructor(public name: string, public age: number) {}
    
    // Line 5
    sayHello(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Line 11
  const john: Person = new Person('John', 30);
  john.sayHello();
  
  // Line 15
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  // Line 18
  const squaredNumbers: number[] = numbers.map((n) => n ** 2);
  console.log(squaredNumbers);
  
  // Line 22
  const [first, second, ...rest]: number[] = numbers;
  console.log(first, second, rest);
  
  // Line 26
  const sum: (a: number, b: number) => number = (a, b) => a + b;
  console.log(sum(3, 5));
  console.log(sum(4, 5));
  console.log(sum(3, 53));
  
  // Line 30
  const asyncFunction: () => Promise<void> = async () => {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    console.log(data);
  };
  
  // Line 37
  const fetchData: () => Promise<void> = async () => {
    try {
      await asyncFunction();
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  // Line 44
  fetchData();
  
  // Line 47
  const obj: { name: string; age: number; city: string } = {
    name: 'John',
    age: 30,
    city: 'New York',
  };
  
  // Line 57
  const mergedObj: { name: string; age: number; city: string; country: string } = {
    ...obj,
    country: 'USA',
  };
  console.log(mergedObj);
  
  // Line 61
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved!'), 2000);
  });
  
  // Line 66
  promise.then((result) => console.log(result));
  
  // Line 69
  const set: Set<number> = new Set([1, 2, 3, 4, 5]);
  console.log(set);
  
  // Line 73
  const map: Map<string, any> = new Map();
  map.set('name', 'John');
  map.set('age', 30);
  console.log(map);
  
  // Line 78
  const weakSet: WeakSet<object> = new WeakSet();
  weakSet.add(john);
  console.log(weakSet);
  
  // Line 82
  const weakMap: WeakMap<object, string> = new WeakMap();
  weakMap.set(john, 'John\'s data');
  console.log(weakMap);
  
  // Line 86
  const symbol: symbol = Symbol('mySymbol');
  console.log(symbol);
  
  // Line 90
  function* generatorFunction(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Line 96
  const generator: Generator<number> = generatorFunction();
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());