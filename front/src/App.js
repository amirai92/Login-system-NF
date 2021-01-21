import React, { useState, useCallback } from "react";
// import SignIn from "./components/Signin/SignIn";
// import SignUp from "./components/Singup/Signup";
// import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
import Auth from "./components/User/Pages/Auth";
import Users from "./components/User/Pages/Users";
import MainNavigation from "./components/Navigation/MainNavigation";
import { AuthContext } from "./components/context/auth-context";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

//    ADD PAGE NOT FOUND!      <Route path="/" component={PageNotFound} />

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    routes = (
      <>
        <Switch>
          <Route path="/">
            <Users />
          </Route>
          <Redirect to="/auth" />
        </Switch>
      </>
    );
  } else {
    routes = (
      <>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/auth" />
        </Switch>
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
/*
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
 
*/
