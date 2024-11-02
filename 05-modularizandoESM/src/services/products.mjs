// todas as funçoes que lidam com produto

export const productType={
    version:"digital",
    tax:"x1",
};

export async function getFullName(codeId,productName) {
    console.log("product: "+ codeId + "--" + productName);
    await doBreakLine();
    

}
//hidden function = funçao somente pra o propio arquivo nao e exportado, so faz sentido existir aqui.
async function doBreakLine() {
    console.log("\n")
}
export async function getProdutcLabel(productName) {
    console.log(`product name ${productName}`);
    
}


