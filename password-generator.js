function generatePassword(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    
    const newArr = [];
    //let index = Math.ceil(Math.random()*characters.length);
    for(let i =1; i<=length; i++){
        let index = Math.ceil(Math.random()*characters.length);
        newArr.push(characters[index]);
    }
    return newArr.join("");
}

const password = generatePassword(5);
console.log(`Generate password: ${password}`);