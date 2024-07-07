// let có cơ chế hoisted, nhưng khác var nhưng không được khởi tạo giá trị ban đầu...
// console.log(a); => Lỗi
let a = 1;
console.log(a);
// le không thể tái khai báo
// let a=2; => Lỗi

//let không cho tái khai báo => Lỗi
//let a = 3;
//console.log(a);

// let cho phép gán lại giá trị
a = 2;
console.log(a);