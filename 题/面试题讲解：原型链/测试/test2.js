// function test(){
// }
// console.log(test.name);
// console.log(test.length);
// function add(a, b) {
//     return a + b;
// }
//相当于
var add = new Function("a", "b", "return a+b");
console.log(add(2, 3));