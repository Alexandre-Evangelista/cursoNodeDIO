const product = require ('./services/products.js');

const confg=require('./services/config.js');

//caso nao queira pegar todas as funçoes
const {connectToDatabase,disconnectData}= require('./services/database.js');

async function main() {
    product.getFullName("20","ps5")
    product.getProdutcLabel("disco voador")
    console.log(confg.devArea.version);
    console.log(product.productType.version);
    connectToDatabase("mySQL");
    disconnectData();

}
main();