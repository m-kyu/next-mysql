import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useState } from 'react'



const List = ({data}) => {
   const router = useRouter();

  async function del(id){
    let d;
    await axios.delete(`/api/${id}`).then(res=>res.data); 
    router.replace('/')
  }


  if(!data.length) return(<>loading...</>)
    
  return (
    <div>
        <h2>List
          <Link href="/write"> write </Link>
        </h2>        

        {
            data.map((res)=>(
                <p key={res.id}>{res.name} 
                  <Link href={{pathname:'/update',query:res}} >수정</Link>
                  <button onClick={()=>del(res.id)}>삭제</button>
                </p>
            ))
        }
    </div>
  )
}

export default List