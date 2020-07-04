function test() {
}

test.prototype.sayHello = function(){
    console.log("asdfa");
}

var t1 = new test();
var t2 = new test();
var t3 = new test();

t1.sayHello();
t2.sayHello();

console.log(t1.sayHello === t2.sayHello);

