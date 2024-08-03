//Method Function (hàm phương thức): là hàm được định nghĩa/ khai báo bên trong đối tượng, được coi như một phương thức của đối tượng

let dev = {
    username: 'ABC',
    greet: function(){
        console.log(`Hello, I am ${this.username}`)
    }
    // greetArowFunc: () => {
    //     console.log(`Hello, I am ${this.username}`) // Arrow Func không có this
    // }
}

dev.greet()
// dev.greetArowFunc()