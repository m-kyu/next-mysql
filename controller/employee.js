import {executeQuery} from '../config/db';

const getAllEmployee = async(req,res)=>{
    let data = await executeQuery('select * from count',[]);
    console.log(data)
    res.send(data);
}

export { getAllEmployee };