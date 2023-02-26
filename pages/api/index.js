
import {executeQuery} from '../../config/db';

const handler = async (req,res) => {    
    const {method,body} = req;
    switch(method){
        case "GET" : selectData(); break;
        case "POST" : insertData(); break;
    }

    async function selectData(){
        let data = await executeQuery('select * from test',[]);
        res.json(data);
    }

    async function insertData(){
        let data = await executeQuery("insert into test (name,email,date) values (?,?,?)",[body.name,body.email,body.date]);
        res.json(data);        
    }    
}

export default handler;
