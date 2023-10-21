import express from 'express';
import { DbOperations } from './dataaccess/crud.js';
async function server(){
const PORT = process.env.PORT || 9076;

const instance =  express();
instance.use(express.json());
const dbo = new DbOperations();


instance.get('/api/products',dbo.getData);
instance.get('/api/products/:id',dbo.getDataById);
 
instance.post('/api/products',dbo.createProduct);
instance.put('/api/products/:id',dbo.updateProduct);
instance.delete('/api/products/:id',dbo.deleteProduct);


instance.listen(PORT, ()=>{
    console.log(`API Server is started on PORT: ${PORT}`);
});
}
server();
 export  {
    server
  };