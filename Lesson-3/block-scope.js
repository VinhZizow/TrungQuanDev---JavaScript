const testScope = () => {
    {
        var a = 1;
        let b = 2;
        const c = 3;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
    //console.log(a);
    //console.log(b);
    //console.log(c);
testScope();

// var: phạm vi toàn cục & phạm vi trong function
// let và const chỉ trong block

// THỰC TẾ: chủ yếu dùng let và const