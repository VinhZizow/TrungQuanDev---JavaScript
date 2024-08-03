// for...of dùng để lặp qua các giá trị của một iterable obj

let colors = ['red', 'green', 'blue']

for(let color of colors){
    console.log(`Color:${color}`)
}

let username = 'Hello World'
for(let char of username){
    console.log(`Char: ${char}`)
}


let dev = {
    username: 'Hello JS',
    age: 30,
    gender: 'male',
    country: 'Vietnam',
    hobbies: ['code', 'read', 'travel'],
}

/*
for(let key of dev){ // error vì js obj không phải là iterable obj => không dùng for of được
    console.log(`${key}: ${dev[key]}`)
    console.log(`--------------`)
    if (key === 'hobbies'){
        console.log(dev[key])
    }

}
    */