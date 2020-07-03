var u1 = {  // new Object()
    name: "abc",
    age: 123
}

var u2 = u1;

u2 = {  // new Object()
    name:"bcd",
    age:123
}

console.log(u1.name, u2.name);

console.log(u1 === u2);
