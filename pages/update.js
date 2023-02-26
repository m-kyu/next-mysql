import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'

const Update = () => {
  const router  = useRouter();
  console.log(router.query.id)

  async function submit(e){
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let date = e.target.date.value;
    console.log(name, email, date)

    await axios.put(`/api/${router.query.id}`,{name,email,date}); 
    router.push('/')

  }
  return (
    <div>
        <form onSubmit={submit}>
          <input type="text" name="name"/>
          <input type="text" name="email"/>
          <input type="text" name="date"/>
          <input type="submit"/>
        </form>
    </div>
  )
}

export default Update