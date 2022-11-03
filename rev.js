
//var x = 0
let x = 0

const CONST_ID = 0 //convention

//arrow function - no this, no proto, no construct ES6

//es5
function func (a, b, c) {} //func declaration 
var func = function (a, b, c) {} //func expression 
//es6
let func = (a) => {} // parenteses opcional como um parametro
let func = (a, b ,c) => {} //parenteses requerido com multiplos parametros

//template literais
var str = 'string date: ' + date //es5
let str = `string date: ${date}` //es6
