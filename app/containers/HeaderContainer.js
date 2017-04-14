import React, { Component }  from 'react'
import {connect} from 'react-redux'

import { browserHistory } from 'react-router'

import WhoAmI from '../components/WhoAmIComponent'

const MapStateToProps = (state) => {
  return {
    user: state.auth,
  }
}

class HeaderContainer extends Component {

  constructor(props){
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick (value) {
    browserHistory.push(value)
  }

  onLogInClick (){
    browserHistory.push('/login')
  }


  render() {
    return (
            <div>
                  <div className="login-sign-up-header">
                  <div className="header" onClick={() => this.onButtonClick('/')}>THE ART SHOP</div>
                  <div className="header-btn" onClick={() => this.onButtonClick('/collection')}>shop</div>
                  {this.props.user ? <WhoAmI /> :
                    <div className="header-btn"><div onClick={this.onLogInClick}>log in</div> </div>}
                  <div className="header-btn" onClick={() => this.onButtonClick('/about')}>about</div> 
                  <div className="header-btn" onClick={() => this.onButtonClick('/cart')}> <i className="fa fa-shopping-cart" ></i></div>
                  </div>
            </div>
    )
  }
}

  export default connect(MapStateToProps)(HeaderContainer)
