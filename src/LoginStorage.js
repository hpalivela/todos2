import React, { useEffect, useState } from 'react'

const LoginStorage = () => {
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
   
    useEffect(()=>{
        localStorage.setItem('settingUser',JSON.stringify(user));
        localStorage.setItem('settingPass',JSON.stringify(pass));
    },[user,pass])
    const submitHandler=(e)=>{
        console.log(user,pass)
        e.preventDefault();

    }
    useEffect(() => {
        const storedUser = localStorage.getItem('settingUser');
        const storedPass = localStorage.getItem('settingPass');
        
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        
        if (storedPass) {
            setPass(JSON.parse(storedPass));
        }
    }, []);
  return (
    <center>
    <div>
        <form>
      <h1>Login Page</h1>
      <label> Enter UserName
      <input type='text' name='user' value={user} onChange={(e)=>setUser(e.target.value)}/>
      </label><br/><br/>
      <label> Enter Password
      <input type='password' name='pass' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      </label><br/><br/>
      <button  onClick={submitHandler}>submit</button>
      </form>
    </div>
    </center>
  )
}

export default LoginStorage




