import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './assets/components/card/Card';

const App = () => {

  const[users,setusers] = useState([])
  const [loading,setisloading] = useState(false)
  useEffect(()=>{
    async function fetchusers() {
      try {
        setisloading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setusers(data);
      } catch (error) {
        console.log(error);
        
      }
      finally{
        setisloading(false);
      }
    }
    fetchusers();
  },[])

  if (loading) return <p>Loading...</p>

  return (
    <>
    <h1> User List</h1>
    <div className=" container" id="userdetails"> 
      {
        users.map((user)=>(
          <Card key = {user.id} user={user}/>
        ))
      }
    </div>  
   
    </>
  )
}

export default App;
