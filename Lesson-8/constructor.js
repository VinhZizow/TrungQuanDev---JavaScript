// Constructor: hàm khởi tạo để tạo đối tượng mới
function dev(name){
    this.name = name;
    this.greet = function(){
        console.log(`Hello, I am ${this.name}`)
    }
}

const trungquandev = new dev('TrungQuanDev')
trungquandev.greet()
