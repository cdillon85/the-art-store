'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

//imports for Material UI config
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import ProductListContainer from './containers/ProductListContainer'
import SingleProductContainer from './containers/SingleProductContainer'
import PaymentContainer from './containers/PaymentContainer'
import AccountContainer from './containers/AccountContainer'
import OrderConfirmationContainer from './containers/OrderConfirmationContainer'
import GuestOrderConfirmationComponent from './components/GuestOrderConfirmationComponent'
import AboutComponent from './components/AboutComponent'

import store from './store'
import HeaderContainer from './containers/HeaderContainer'

import {loadAllProducts} from './reducers/product'
import {loadSingleProduct} from './reducers/singleProduct'
import {loadAccountOrders} from './reducers/account'
import LoginComponent from './components/LoginComponent'
import CheckOutLoginContainer from './containers/CheckOutLoginContainer'
import {loadCurrentOrder} from './reducers/order'
import ShoppingCartContainer from './containers/ShoppingCartContainer'
import CheckOutContainer from './containers/CheckOutContainer'
import SignUpPageContainer from './containers/SignUpPageContainer'
import CheckOutSignUpPageContainer from './containers/CheckOutSignUpPageContainer'
import JumbotronComponent from './components/JumbotronComponent'


const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <HeaderContainer />
      {children}
    </div>
)

const onProductEnter = function(nextRouterStateo) {
  store.dispatch(loadAllProducts())
}

const onSingleProductEnter = function(nextRouterState) {
  const productId = nextRouterState.params.productId
  store.dispatch(loadSingleProduct(productId))
}

const onAccountEnter = function(nextRouterState) {
  const userId = nextRouterState.params.userId
  store.dispatch(loadAccountOrders(userId))
}

const onConfirmationEnter = function(nextRouterState) {
  const orderId = nextRouterState.params.orderId
  store.dispatch(loadCurrentOrder(orderId))

}

const AppRoutes = (
  <Route path="/" component={ExampleApp}>
    <IndexRoute component={JumbotronComponent} />
    <Route path="/collection" component={ProductListContainer} onEnter={onProductEnter} />
    <Route path="/about" component={AboutComponent} />
    <Route path="/products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
    <Route path="/cart" component={ShoppingCartContainer} />
    <Route path="/payment" component={PaymentContainer} />
    <Route path="/confirm/guestOrder" component={GuestOrderConfirmationComponent} />
    <Route path="/confirm/:orderId" component={OrderConfirmationContainer} onEnter={onConfirmationEnter}/>
    <Route path="/checkout" component={CheckOutContainer} />
    <Route path="/checkout-login" component={CheckOutLoginContainer} />
    <Route path="/checkout-signup" component={CheckOutSignUpPageContainer} />
    <Route path="/signup" component={SignUpPageContainer} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/accounts/:userId" component={AccountContainer} onEnter={onAccountEnter} />
  </Route>
)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={AppRoutes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)

