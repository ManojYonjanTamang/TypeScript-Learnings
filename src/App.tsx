import "./App.css";

interface User {
  name: string;
  age: number;
}

function App() {
  const user: User = {
    name: "Ram",
    age: 25,
  };

  return <>{user?.name ?? "UserName"}</>;
}

export default App;

interface UserAccountType {
  name: string;
  age: number;
}
class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const userAccount: UserAccountType = new UserAccount("Rama", 20);
console.log(userAccount);

// function deleteUser(user: User) {}
// function getAdminUser(): User {}

// Union
// type MyBool = true | false;

// type LockStates = "locked" | "open" | "half open";
// function getLength(myObj: string | string[]) {
//   return myObj.length;
// }

// Mainly practice this
function meroFunc(myObj: string | string[] | number | string[]) {
  if (typeof myObj === "number") {
    return "correct";
  }
  return "incorrect";
}
console.log(meroFunc(["123"]));

// Structural Type System:
// The point variable is never declared to be a Point type.
// However, TypeScript compares the shape of point to the
// shape of Point in the type-check. They have the same shape, so the code passes.
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  return p.x + p.y;
}
console.log(logPoint({ x: 2, y: 5 }));

// const message = "hello!";
// message();

// const user = {
//   name: "Daniel",
//   age: 26,
// };
// user?.location ?? "no property";

// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   console.log("It is b.");
//   // if not a its definitely b since value is either a or b (a|b)
// } else if (value !== "b") {
//   console.log("It is a.");
// }

(function (name: string = "Khushi", date: Date = new Date()) {
  console.log(`Hello ${name}, today is ${date.toDateString()}`);
})();

// able to figure that out. That’s a feature, and it’s best not to add annotations when the type system would end up inferring the same type anyway.
let msg = "hello there!";
console.log(msg);

function pinterest(myObj: { x: number; y: number }) {
  console.log(myObj.x);
  console.log(myObj.y);
}
pinterest({ x: 5, y: 10 });

(function myFunc(a: number | string | object[]) {
  console.log(a);
})([{ a: "123455" }]);

// (function myFunc(a: number | string | object[]) {
//   console.log(a.toUpperCase());
// })("mero");

(function meroFucn(a: string | number | object[]) {
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  }
})("mero function");

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
    console.log("Hello, " + x.join(", "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(["Ram", "Shyam", "Sita"]);

// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

let changingString = "Hello Sunday";
changingString = "Hello Monday";
changingString = "123";
changingString;

const constantString = "Hello Everyday";
constantString;

function compare(a: number, b: number): 0 | 1 | -1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare(5, 4));

// function myFunc(param?: number | null) {
//   console.log(param!.toFixed());
// }
// myFunc(null);

// Symbol creates unique values
const alpha = Symbol();
const beta = Symbol();
const myObj = {
  [alpha]: "Hello",
  [beta]: "Hi",
};
console.log(myObj[alpha]);
//
//
//

function printAll(sendString: string | string[] | null | undefined) {
  if (typeof sendString === "string") {
    console.log(sendString);
  } else if (sendString && typeof sendString === "object") {
    // string[] | null   ==>   object
    sendString.forEach((x) => console.log(x));
  } else {
    console.log(sendString);
  }
}
let x;
printAll(x);

function someFunc(myObj: number | null = 2) {
  console.log(myObj);
}
// someFunc(null);
someFunc(undefined);
//
//
//
//
interface Circle {
  kind: "circle";
  value: number;
}
interface Square {
  kind: "square";
  value: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.value ** 2);
  } else {
    console.log(shape.value * shape.value);
  }
}
getArea({ kind: "square", value: 2 });
//
//
//
//
//
//
//IMPORTANT
function mapFunction<Input, Output>(
  arr: Input[],
  func: (n: Input) => Output
): Output[] {
  return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = mapFunction(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a, i) =>
  console.log("From callback: arr[i]= " + a, "i= " + i)
);

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  return a + b + c;
}
console.log(sum({ a: 1, b: 2, c: 3 }));

//
//
// Wrong
// function clothing(getObj: object) {
//   return getObj.upper + getObj.lower;
// }
// console.log(clothing({ upper: "Shaket", lower: "Chinos" }));

// Wrong
// function clothing2({ upper: string, lower: string }) {
//   return upper + lower;
// }
// console.log(clothing2({ upper: "Shaket", lower: "Chinos" }));

// Correct
function clothing3({ upper, lower }: { upper: string; lower: string }) {
  return upper + lower;
}
console.log(clothing3({ upper: "Shaket", lower: "Chinos" }));

// Correct
function clothing(getObj: { upper: string; lower: string }) {
  return getObj.upper + getObj.lower;
}
console.log(clothing({ upper: "Shaket", lower: "Chinos" }));

// Correct
// interface objType {
//   a: number;
//   b: number;
// }
type objType = {
  a: number;
  b: number;
};
function clothing11(obj: objType) {
  return obj.a + obj.b;
}
console.log(clothing11({ a: 5, b: 5 }));

// another example
const first = [1, 2, 3];
const second = [0];
first.forEach((x) => second.push(x));
console.log(second);
//
//
//
interface SomeType {
  // While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking
  // readonly prop: string;

  // can modify
  prop: string;
}

(function doSomething(obj: SomeType) {
  obj.prop = "hello";
  console.log(`prop has the value '${obj.prop}'.`);
})({ prop: "Thursday" });

//
//
// as => removing the necessity to pass object same as {color: "white", width: 100} as per ObjType mentioned
interface ObjType {
  color?: string;
  width: number;
}
function createSomething(obj: ObjType): { color: string; area: number } {
  return {
    color: obj.color ? obj.color : "black",
    area: obj.width ? obj.width * obj.width : 0,
  };
}
console.log(createSomething({ rang: "white", width: 100 } as ObjType));

//
//
//
//
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
// interface ColorfulCircle extends Colorful, Circle {}
type ColorfulCircle = Colorful & Circle;

const result: ColorfulCircle = { color: "red", radius: 5 };

console.log(result);
//
//
//
function tupleExample(...args: [string, number, ...boolean[]]) {
  const [name, age, ...conditions] = args;
  return conditions.map((condition) => condition);
}
console.log(tupleExample("hi", 1, true, false, true));
//
//
//
//
//
//
// as const ===> readonly, so tuples should be readonly as well
let point = [3, 4] as const;

// function distanceFromOrigin([x, y]: [number, number]) {
function distanceFromOrigin([x, y]: readonly [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

console.log(distanceFromOrigin(point));
//
//
//
//
interface LengthType {
  length: number;
}

function loggingIdentity<Type extends LengthType>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
loggingIdentity("[1, 2, 3, 4]");
