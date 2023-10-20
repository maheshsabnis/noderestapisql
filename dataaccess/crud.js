import { DbConection } from "./connect.js";
import sql from 'mssql';
// The DB Operation Class
class DbOperations {
     getData=async(request,response)=>{
        try {
            if(await DbConection.connect()) {
                
               const result = await sql.query`select * from ProductInfo`;
              
               return response.status(200).json(result.recordset); 
            } else {
                console.log(`Else Conidtion`);
               throw new Error("The Connection coud not be established");
            }
           }catch(ex){
               console.log(ex.message);
               return response.status(500).json(ex.message);
           }
    }

    getDataById=async(request,response)=>{
        let id = parseInt(request.params.id);
        try {
            if(await DbConection.connect()) {
                
               const result = await sql.query`select * from ProductInfo where ProductRowId=${id}`;
              
               return response.status(200).json(result.recordset); 
            } else {
                console.log(`Else Conidtion`);
               throw new Error("The Connection coud not be established");
            }
           }catch(ex){
               console.log(ex.message);
               return response.status(500).json(ex.message);
           }
    }


     createProduct=async(request,response)=>{
        let product ={
            ProductId:request.body.ProductId,
            ProductName:request.body.ProductName,
            CategoryName:request.body.CategoryName,
            Manufacturer:request.body.Manufacturer,
            Description:request.body.Description,
            BasePrice:request.body.BasePrice
        } 
       
        try {
         if(await DbConection.connect()) {
            const result = await sql.query`insert into ProductInfo (ProductId, ProductName,CategoryName, Manufacturer, Description, BasePrice) values (${product.ProductId}, ${product.ProductName}, ${product.CategoryName}, ${product.Manufacturer}, ${product.Description},${parseInt(product.BasePrice)})`;
            console.log(result);
            return  response.status(200).json(result);
         } else {
            throw new Error("The Connection coud not be established");
         }
        }catch(ex){
            console.log(ex.message);
            return  response.status(200).json(ex.message);
        }
    }


    updateProduct=async(request,response)=>{
        let id = parseInt(request.params.id);
      
        let product ={
            ProductId:request.body.ProductId,
            ProductName:request.body.ProductName,
            CategoryName:request.body.CategoryName,
            Manufacturer:request.body.Manufacturer,
            Description:request.body.Description,
            BasePrice:request.body.BasePrice
        } 
        
        try {
         if(await DbConection.connect()) {
            const result = await sql.query`Update ProductInfo set ProductId = ${product.ProductId}, ProductName =  ${product.ProductName}, CategoryName =  ${product.CategoryName}, Manufacturer =  ${product.Manufacturer}, Description =  ${product.Description},BasePrice = ${parseInt(product.BasePrice)} where ProductRowId=${id}`;
            console.log(result);
            return  response.status(200).json(result);
         } else {
            throw new Error("The Connection coud not be established");
         }
        }catch(ex){
            console.log(ex.message);
            return  response.status(200).json(ex.message);
        }
    }

    deleteProduct=async(request,response)=>{
        let id = parseInt(request.params.id); 
        try {
         if(await DbConection.connect()) {
            const result = await sql.query`delete ProductInfo  where ProductRowId=${id}`;
            console.log(result);
            return  response.status(200).json(result);
         } else {
            throw new Error("The Connection coud not be established");
         }
        }catch(ex){
            console.log(ex.message);
            return  response.status(200).json(ex.message);
        }
    }

}

export {DbOperations}