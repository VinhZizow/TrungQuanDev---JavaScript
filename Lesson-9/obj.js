// Cách khai báo 1

let dev = {
    username: 'ABC 1',
    greet: function(){
        console.log(`Hello, I am ${this.username}`)
    },
    skills: ['JS', 'Python', 'SQL'],
    positions:{
        frontEnd: ['React', 'Express'],
        backEnd: [1, 2, 3, 4],
        fullStack: true,
    }
}
console.log(dev)

// Cách khai báo 2
let dev2 = new Object
dev2.username = 'ABC 2',
dev2.greet = function(){
    console.log(`Hello, I am ${this.username}`)
}
dev2.skills = ['JS', 'Python', 'SQL']
dev2.positions = {
    frontEnd: ['React', 'Express'],
    backEnd: [1, 2, 3, 4],
    fullStack: true,
}

console.log(dev2)


// Hai cách truy cập thuộc tính obj

console.log(dev.username)
console.log(dev['username'])


// Thêm sửa xóa thuộc tính của obj
dev.gender = 'male'
console.log(dev)
dev.age = 50
console.log(dev)

dev.age = 51
console.log(dev)

delete dev2.greet
console.log(dev2)

// Lọc qua các thuộc tính của đối tượng: for in (Lesson 7)
// Đối tượng chứa method function (Lesson 8)