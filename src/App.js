import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/*COMPONENTES*/
import Home from "./pages/home/home-page";
import Contact from "./pages/contact/contact-page";
import Login from "./pages/login/login-page";
import Register from "./pages/register/register-page";
import Tyc from "./pages/tyc/tyc-page";
import ResetPassword from "./pages/reset-password/reset-password-page";
/*ESTILOS*/
import "./App.css";
function App() {
  return (

    <Router>


      <Switch>
        <Route path="/contacto">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/terminos-y-condiciones">
          <Tyc />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>




    </Router>




  );
}

export default App;
