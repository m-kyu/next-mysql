const {createPool} = require('mysql');
const pool  = createPool({
    host:'svc.sel3.cloudtype.app',
    user:'root',
    password:'1234',
    port:31264,
    database:'greendb',
})
pool.getConnection(()=>{
    console.log('success')
});
const executeQuery= async (query,arraParms)=>{        
    return await new Promise((resolve)=>{
        pool.query(query,arraParms,(err,data)=>{
            // console.log(data)
            resolve(data)
        });
    }) 
    
}

module.exports = {executeQuery};