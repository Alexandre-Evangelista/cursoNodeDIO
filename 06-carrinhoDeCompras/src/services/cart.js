
export async function addItem(userCart,item) {
    userCart.push(item);
}

export async function delItem(userCart,name) {
    const index = userCart.findIndex((item)=> item.name === name)
    if(index !== -1){
        userCart.splice(index,1);
    }else{
        console.log('o carrinho esta vazio')
    } 
}

export async function removeItem(userCart,name) {
    const foundIndex= userCart.findIndex((p)=>p.name === name)
    if(userCart[foundIndex].quant>1){
        userCart[foundIndex].quant-=1;
    }else{
        userCart.splice(foundIndex,1)
    }
}

export async function calculateTotal(userCart){
 console.log(userCart.reduce((total,item)=>total+ item.subTotal(), 0));
}

export async function displayCart(userCart){
console.log('shopee cart')
userCart.forEach((item,index)=>{
    console.log(`${index+1}. ${item.name} R$ ${item.price}| ${item.quant} | ${item.subTotal()}`)
})
}