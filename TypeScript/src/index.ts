// let age: number = 30;
// if (age < 50) age += 10;
// console.log(age);

//TYPES CAN BE NOT MENTIONED IN SOME SITUATION
// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;

//"Any" Type(WE HAVE NOT USE IT )
// let level;

// let numbers: number[] = [1, 2, 3];

//TOUPLE
// let user: [number, string] = [1, 'Amir'];
////////////////////////

// const small = 1
// const medium = 2
// const large = 3

//خوانده شود پلیزززززززز
// const enum Size {
//   Small = 's',
//   Medium = 'm',
//   large = 'l',
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);
/////////////////////

// function calculateTax(income: number, taxYear = 2022): number {
//   // let x;
//   if (taxYear < 50_000) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000);

//////////////////
//!@#$!@#$!#@$!#@$!@#$!#$تعریف فانکشن داخل اینترفیس و تایپ ها خوانده شود
// type Employee = {
//   //خوانده شود تایپ readonly
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let daneshamoozjadid: Employee = {
//   id: 1,
//   name: 'Amir',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// emloyee.name = 'javad';
// emloyee.id = 2;

/////////////////////

//UNION TYPE
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

///////////////////
//INTERSECTION
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

////////////////

///////////////////

//literal types
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

// type Metric = 'cm' | 'inch';

//////////////////

/////////////////

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log('invalid argument');
// }
// greet(null);

////////////////

///////////////
//OPTIONAL CHAINING
// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(1);
// // if (customer !== null && customer !== undefined) console.log(customer.birthday);
// console.log(customer?.birthday?.getFullYear);

// if(customers !== null && customers !== undefined) customers[0]
//customers?[0]

//خوانده شود
let log: any = (message: string) => {
  console.log(message);
};

log?.('done');
//////////////////////

////////////////////
//nullish operator
// let speed: number | null = null;

// let ride = {
//   speed: speed ?? 30,
// };

///////////////////

/////////////////
//TYPE ASSERTION

//DOES THE SAME THING
// let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = <HTMLInputElement>document.getElementById('phone');
///////////////////

//////////////////
//Unknown type
// function render(document: unknown) {
//   if (typeof document === 'string') {
//   }
// }
/////////////////

/////////////////
// //never
// function processEvents(): never {
//   while (true) {}
// }
// processEvents();
// //never reaches this line
// console.log('Hey');
///////////////////

///////////////////
//classes
class Account {
  nickname?: string;

  // !!!!!!!!!!!!!!!!!constructor khande shavad mohem !!!!!!!!!!!!!!!!!!
  constructor(
    public readonly id: number,
    public nicknamename: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }
  // setter getter => khande shavad !!!!!!
  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Amir', 0);
console.log(account.balance);

// account.deposite(100);
// console.log(account);

//can not do it beacuse its private
// account._balance = 0;

// cannot do it
// account.id = 8;

///////////////////////

//////////////////////////
//Index signitures

class SeatAssignment {
  [seatNumber: string]: string;
}

// let setas = new SeatAssignment();
// setas.A1 = 'Amir';
// // setas['A1'] = 'Amir'
// setas.A2 = 'Mohammad';
///////////////////////////

/////////////////
//Static properties
class Ride {
  // !!!!!!!!!! static khande shavad !!!!!!!!
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);
////////////////////////////

////////////////////////////
//inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log(`${this.fullName} is walking`);
  }
  //!!!!!!!!get khande shavad !!!!!!!
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    // !!!!! super !!!!!
    super(firstName, lastName);
  }

  takeTest() {
    console.log('taking a test');
  }
}

// ////////////////////////////

class Teacher extends Person {
  // !!!!!!override bekhoonesh !!!!!
  override get fullName(): string {
    return 'professor' + ' ' + super.fullName;
  }
}

// class Principal extends Person {
//   override get fullName(): string {
//     return 'principal' + ' ' + super.fullName;
//   }
// }

// why define a class type for a function's property ? search bezan !!!!!
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// printNames([
//   new Student(1, 'Amir', 'Zare'),
//   new Teacher('Mohammad', 'Rashidi'),
//   new Principal('Reza', 'Sadeghi'),
// ]);
/////////////////////////

///////////////////////
// //Abstract

// !!!!!!!!! WHYYYYY abstract ? !!!!!!!!!
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a Circle ...');
  }
}

// //can not do it beacuse class abstracted
// // let shape = new Shape('red')

///////////////////////

//////////////////////
//interface

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {}

  removeEvent(): void {}
}
/////------------------------------->
////////////////////

////////////////////
// GENERIC CLASSES
// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair<number, string>(1, 'a');
// console.log(pair);

////////////////////////

///////////////////////
//GENREIC FUNCTIONS
// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// ArrayUtils.wrapInArray<number>(1);

///////////////////////

///////////////////////
//Generic interface
// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// fetch<User>('url');
// fetch<Product>('url');

//////////////////

//////////////////
// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }
// console.log(echo(new Customer('amir')));

///////////////////

///////////////////

// interface Product {
//   name: string;
//   price: number;
// }
// //type mapping
// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };
// // let product: ReadOnly<Product> = {
// //   name: 'a',
// //   price: 1,
// // };

// class Store<T> {
//   protected _objects: T[] = [];
//   add(obj: T): void {
//     this._objects.push(obj);
//   }
//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: 'a', price: 1 });
// console.log(store.find('price', 1));

///////////////////////////////

///////////////////////////////
//Decorators in classes

// type ComponentOptions = {
//   selector: string;
// };

// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log('Component decorator called');
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();

//     constructor.prototype.insertInDom = () => {
//       console.log('Inserting component in dom');
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log('Pipe decorator called');
//   constructor.prototype.pipe = true;
// }

// @Pipe
// @Component({ selector: '#profile-img' })
// class ProfileComponent {}

/////////////////////////////

/////////////////////////////
//Decorators in methods
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;

//   descriptor.value = function (...args: any) {
//     console.log('Before');
//     original.call(this, ...args);
//     console.log('after');
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log('Person says' + message);
//   }
// }

// let person = new Person();
// person.say('hello');

////////////////////

////////////////////
//accesor(get and set) decorators
// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === 'string' ? result.toUpperCase() : result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person('Amir', 'Zare');
// console.log(person.fullName);

/////////////////////////

//////////////////////////
//Property Decorators
// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should be at least ${length} charachters long`
//           );
//         value = newValue;
//       },
//     };

//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User('1234');
// console.log(user.password);

/////////////////////////////////

/////////////////////////////////
//we dont use it so much
//Parametr Decorators
// type WatchParameter = {
//   methodName: string;
//   parameterIndex: number;
// };

// const watchedParameters: WatchParameter[] = [];

// function Watch(target: any, methodName: string, parameterIndex: number) {
//   watchedParameters.push({
//     methodName,
//     parameterIndex,
//   });
// }

// class vehicle {
//   move(@Watch speed: number) {}
// }

// console.log(watchedParameters);
////////////////
