import React from 'react'

export const WhoAmI = ({ user, logout }) => {
	const firstLetter = user.name[0].toUpperCase()

	const style = {margin: 5, float: 'right'}

	return (
	  <div className="whoami">
		<div className="whoami-text icon">
		<i className="fa fa-user-circle" aria-hidden="true"></i>    
		Hello {user && user.name}!
	    <div onClick={logout}>Log-out</div>
	    </div>
	  </div>
)}

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
