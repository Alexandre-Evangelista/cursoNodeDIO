// todas as funçoes que lidam com produto
 const productType={
    version:"digital",
    tax:"x1",
};

async function getFullName(codeId,productName) {
    console.log("product: "+ codeId + "--" + productName);
    await doBreakLine();
    

}
//hidden function = funçao somente pra o propio arquivo nao e exportado, so faz sentido existir aqui.
async function doBreakLine() {
    console.log("\n")
}
async function getProdutcLabel(productName) {
    console.log(`product name ${productName}`);
    
}
 
module.exports={
    getFullName,productType,getProdutcLabel
};


