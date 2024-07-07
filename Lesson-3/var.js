// var có cơ chế hoisted, được xác định giá trị ban đầu là undefined

console.log(a);


var a = 1;
console.log(a);

//var có thể tái khai báo
var a = 2;
console.log(a);

// var cho phép gán lại giá trị
a = 3;
console.log(a);