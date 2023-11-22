import React from 'react'

const LoginApi = () => {
  return (
    <div>
        <center>
      <form>
        <label> USERNAME
            <input type='text' />
        </label><br/><br/>
        <label> PASSWORD
            <input type='password' />
        </label><br/><br/>
        <button>Login</button>
      </form>
      </center>
    </div>
  )
}

export default LoginApi
