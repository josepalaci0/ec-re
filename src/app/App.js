import Navbar from '../pages/Navbar';
import {  Switch, Route, Redirect } from 'react-router-dom';
import  Login  from '../pages/containers/Login';
import  ProductComponent  from '../components/ProductComponent';
import  ProductDetailComponent  from '../components/ProductDetailComponent';
import  CartListComponent   from '../components/CartListComponent';
import Home from '../pages/Home';
import Footer from '../pages/Footer';
import './styles.css'
import '../settings/styles/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />      
        <Switch>
          <Route path={`/login/`} exact component={Login} />
          <Route path={`/products/`} exact component={ProductComponent} />  
          <Route path={`/products/detail/:id`} exact component={ProductDetailComponent} />    
          <Route path={`/cart/`} exact component={CartListComponent } />        
          <Redirect to={"/"} />
        </Switch>     
      <Footer />



    </div>
  );
}

export default App;
