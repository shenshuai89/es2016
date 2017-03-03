//let a = 3;
//console.log(a);

//数据解构
let [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)
/*对象扩展运算符
	对象的值的扩展*/
function Arg() {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
Arg(1,2,3);

// ...arg 为一个对象的扩展
function Arg1(first,...arg){
	console.log("...arg "+arg); //[2, 3, 4, 5, 6, 7]
}
function Arg2(first,arg){
	console.log("arg "+arg); //2
}
Arg1(1,2,3,4,5,6,7)
Arg2(1,2,3,4,5,6,7)

/*
let xdd ='习大大'
let news = '这是一段介绍关于习大大的新闻';

console.log(news.indexOf(xdd))
console.log(news.includes(xdd))  //true
console.log(news.startswith(xdd))  //false
console.log(news.endswith(xdd))  //false
console.log('hi',repeat(2))  //重复输出
*/

/*
let m = Math.pow(2,53)-1
let n = Math.pow(2,53)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.isSafeInteger(m))   // true
console.log(Number.isSafeInteger(n))   // false

*/
/*
Math 数学

Math.trunc()//去除小数
Math.sign()//判断正负数
Math.cbrt()//立方根
Math.imul()//乘法
Math.hypot()//返回所有参数平方和

*/