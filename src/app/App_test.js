import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './App_test/test_Login'
import Test_product from './App_test/test_Product'
import Test_ProductDetail from './App_test/test_ProductDetail'
import '../settings/styles/App.css'
import './styles.css'




export const App_test = () => {
  return (
    <div className="App">
      <h1>TEST_PAGES</h1>
      
      <BrowserRouter>
        <Switch>
          <Route path={`/login/`} exact component={Login} />
          <Route path={`/products/`} exact component={Test_product} />  
          <Route path={`/products/detail/:id`} exact component={Test_ProductDetail} />           
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    
      </div>
  );
}

export default App_test;