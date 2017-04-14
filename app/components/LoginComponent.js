import React from 'react'
import {browserHistory} from 'react-router'
import {Link} from 'react-router'

export const LoginComponent = ({ login }) => (
  <div className="log-in-form">
  <h1 className="log-in-title">Log In</h1>
  <p className="text"> access your acccount & order history</p>
       <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
      browserHistory.goBack()
    } } >
        <div className="form-title">email</div>
        <div className="form-input-container" >
        <input className="form-input" type="text" />
        </div>
        <div className="form-title">password</div>
        <div className="form-input-container" >
        <input className="form-input" type="text" />
        </div>
          </form>
        <button id="login-btn">log in</button>
      <p className="text">don't have an account?</p>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  null,
  {login},
)(LoginComponent)


