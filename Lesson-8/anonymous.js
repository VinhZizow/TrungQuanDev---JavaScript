// Anonymous Function: là hàm không có tên. Thường được sử dụng làm đối số cho các hàm khác...
setTimeout(function(){
    console.log(`Sau 1 giay thì hiện dòng này`)
}, 1000)


setTimeout(() => {
    console.log(`Sau 2 giay thì hiện dòng này`)
}, 2000)