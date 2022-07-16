
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './pages/Context/AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import Explore from './pages/Explore/Explore/Explore';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound'

import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import SingleProduct from './pages/Home/Order/SingleProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/singleProduct/:id">
              <SingleProduct></SingleProduct>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>

            </Route>
          </Switch>


        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
