import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import Login from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/admin" component={LoginAdmin} exact />
            <Route path="/edit/:id" component={Edit} exact/>
            <div>
              <NavigationBar />
              <Route path="/home" component={Home} exact />
              <Route path="/homeAdmin" component={HomeAdmin} exact />
              <Route path="/cart" component={Cart} exact />
            </div>
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
