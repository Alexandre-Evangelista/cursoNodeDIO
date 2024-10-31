import { getFullName,getProdutcLabel, productType } from './services/products.js';
import { devArea } from './services/config.js';
import * as db from './services/database.js'

async function main() {
    getFullName("20","ps5")
    getProdutcLabel("disco voador")
    console.log(devArea.version);
    console.log(productType.version);
    db.connectToDatabase("mySQL");
    db.disconnectData();

}
main();