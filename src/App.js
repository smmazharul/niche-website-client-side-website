import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home/Home/Home';
import Service from './Pages/Service/Service/Service';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/Authprovider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gelary from './Pages/Home/Gelary/Gelary';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AddService from './Pages/DashBoard/AddService/AddService';
import Purchage from './Pages/Home/Purchage/Purchage';


function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/Service">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/purchage">
            <Purchage></Purchage>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
