import React from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'
import {UserActions} from '../../store'
const {register} = UserActions

function RegisterScreen({user}){
  if (user) {
    requestAnimationFrame(()=>hashHistory.push('/'))
    return null
  }

  let usernameInput = null
  let passwordInput = null
  let emailInput = null

  const submit = (e)=>{
    e.preventDefault()
    register(usernameInput.value, passwordInput.value, emailInput.value, ()=>{
      hashHistory.push('/')
    })
  }

  return (
    // <form onSubmit={submit}>
    //   <fieldset>
    //     <legend>Login:</legend>
    //     <div>
    //       <label>Username: <input required type="text" ref={el=>usernameInput = el}/></label>
    //     </div>
    //     <div>
    //       <label>Password: <input required type="password" ref={el=>passwordInput = el}/></label>
    //     </div>
    //     <div>
    //       <label>Email: <input required type="email" ref={el=>emailInput = el}/></label>
    //     </div>
    //     <div>
    //       <Link to="/login">Login</Link>
    //       <button>Register</button>
    //     </div>
    //   </fieldset>
    // </form>


    <form onSubmit={submit}>
    <div id="interface">
    <button id="btns active"><Link id="link" to="/register">Register</Link></button>
    <button id="btns"><Link id="link" to="/login">Log In</Link></button>
    <h2>Sign Up for Free</h2>
      <div>
        <label><input required type="text" placeholder="Username*" ref={el=>usernameInput = el}/></label>
      </div>

      <div>
        <label><input required type="password" placeholder="Password*" ref={el=>passwordInput = el}/></label>
      </div>

      <div>
        <label><input required type="email" placeholder="Email*" ref={el=>emailInput = el}/></label>
      </div>

      <div>
          <button id="loginbtn">GET STARTED</button>
      </div>

    </div>

    </form>
  )
}

export default connect(
  state=>({user: state.user})
)(RegisterScreen)
