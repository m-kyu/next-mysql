
import nc from 'next-connect';
import {executeQuery} from '../../config/db';

const handler = async (req,res) => {
    
    const {method,body,query} = req;
    switch(method){
        case "GET" : selectData(); break;
        case "PUT" : updateData(); break;
        case "DELETE" : deleteData(); break;
    }

    async function selectData(){
        let data = await executeQuery('select * from test where id=?',[query.id]);
        res.json(data);
    }

    async function updateData(){
        let {name,email,date} = body;
        let data = await executeQuery("update test set name=?, email=?, date=? where id=?",[name,email,date,query.id]);
        res.json(data);
    }

    async function deleteData(){
        let data = await executeQuery("delete from test where id=?",[query.id]);
        res.json(data);
    }
    
}



export default handler;
