const inventory = [{
        name: "flour",
        quantity: 10
    },
    {
        name: "instant-noodles",
        quantity: 50
    },
    {
        name: "chocolate",
        quantity: 100
    }
];

function findProductIndex(productName){
    for(let i=0; i<inventory.length; i++){
        if(inventory[i].name === productName.toLowerCase()){
           return i;
        }
    }
    return -1;
}
/*return the value to the first function*/

function addProduct(obj){
    let i = findProductIndex(obj.name);
    if(i!=-1){
        inventory[i].quantity+=obj.quantity;
        console.log(`${inventory[i].name} quantity updated`);
    }

    else{
        inventory.push(obj)
        console.log(`${obj.name} added to inventory`)
    }
    return inventory;

}

function removeProduct(name, quantity){
   
    name = name.toLowerCase();
    let i = findProductIndex(name);
    console.log(i);
    
    
    if(i===-1){
        console.log(`${name} not found`);
        return;
    }
    else{
     if(inventory[i].quantity-quantity==0 ){
        inventory.splice(i,1);
    }
    else if (quantity>inventory[i].quantity){
        console.log(`Not enough ${inventory[i].name} available, remaining pieces: ${inventory[i].quantity}`)
    }
    else {
        inventory[i].quantity -= quantity;
       console.log(`Remaining ${name} pieces: ${inventory[i].quantity}`);
    }
}
   

}


console.log(removeProduct("chocolate",55));

