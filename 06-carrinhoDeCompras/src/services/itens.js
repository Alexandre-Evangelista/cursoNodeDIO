export async function createItem(name,price,quant) {
    return{
        name,
        price,
        quant,
        subTotal:()=>price*quant,
    };
};