import { DataAccess } from "./dataaccess/dal.js";

const ds = new DataAccess();

const dbConnectSuccess =  await ds.connectToDb();

if(ds.isConnectionSuccess){
    console.log('Conneciton is sucecssful');
    await ds.getProducts();
    await ds.createProduct();
}else {
    console.log('Conneciton is failed');
}
