import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'

const Write = () => {
  const router  = useRouter();

  async function submit(e){
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let date = e.target.date.value;
    console.log(name, email, date)

    await axios.post('/api',{name,email,date}).then(res=>res.data); 
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

export default Write