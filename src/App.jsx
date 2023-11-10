const App = () => {
  class UserAccount {
    constructor(username, age) {
      this.username = username;
      this.age = age;
    }

    area(x) {
      length * breadth;
    }
  }

  // class UserAccount {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }

  // const userAccount = new UserAccount("Rama", 20);
  // console.log(userAccount);

  const user = {
    name: "Daniel",
    age: 26,
  };

  user?.location ?? "no property";

  const value = Math.random() < 0.5 ? "a" : "b";
  if (value !== "a") {
    console.log("aaaaa");
  } else {
    console.log("bbbbbbbbb");
  }

  const userhere = {
    name: "Daniel",
    age: 26,
  };

  console.log(userhere?.location ?? "no property");

  // import React from "react";

  // const App = () => {
  //   const userhere = {
  //     name: "Daniel",
  //     age: 26,
  //   };

  //   console.log(userhere?.location ?? "no property");
  //   return <div>Helo</div>;
  // };

  // export default App;

  function pinterest(myObj) {
    console.log(myObj.x);
    console.log(myObj.y);
  }
  pinterest({ x: 5, y: 10 });
};

export default App;

function printName({ obj, obj1 }) {
  console.log(`This is ${obj}`);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function compare(a, b) {
  a === b ? 0 : a < b ? -1 : 1;
}

function mapFunction(arr, func) {
  return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = mapFunction(["1", "2", "3"], (n) => parseInt(n));

function minimumLength(obj, minimum) {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}
console.log(minimumLength([1, 1, 2, 3], 10));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// console.log(arr1.push([4, 5, 6]));
console.log(arr1.push(...arr2));

function sum({ a, b, c }) {
  return a + b + c;
}
console.log(sum({ a: 4, b: 5, c: "mero" }));

function createSquare(config) {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
let mySquare = createSquare({ colour: "red", width: 100 });
console.log(mySquare);
