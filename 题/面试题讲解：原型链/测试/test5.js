function A() {

}

function B() {

}



Function.prototype.apply

function createObject() {
    var rad = Math.random();
    if (rad < 0.5) {
        return new A();
    }
    else {
        return new B();
    }
}

var obj = createObject();

//输出创建该对象的函数名

console.log(obj.__proto__.constructor.name);