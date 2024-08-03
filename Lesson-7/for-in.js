let dev = {
    username: 'Hello JS',
    age: 30,
    gender: 'male',
    country: 'Vietnam',
    hobbies: ['code', 'read', 'travel'],
    skill: 'good', 
}

// Để ý phần log ra kiểu mảng hay kiểu string
for(let key in dev){
    console.log(`${key}: ${dev[key]}`)
    console.log(`--------------`)
    if (key === 'hobbies'){
        console.log(dev[key])
    }

}