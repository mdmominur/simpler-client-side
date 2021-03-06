
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Ragister from './Pages/Login/Ragister/Ragister';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ProductPage from './Pages/ProductPage/ProductPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Ragister></Ragister>
            </Route>
            <Route exact path="/products">
              <ProductPage></ProductPage>
            </Route>
            <PrivateRoute exact path="/products/:id">
              <SingleProduct></SingleProduct>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="*">
              <NotFound></NotFound>
            </PrivateRoute>
            
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
