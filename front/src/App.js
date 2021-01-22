import React, { Suspense } from "react";
//import Auth from "./components/User/Pages/Auth";
//import Users from "./components/User/Pages/Users";
import MainNavigation from "./components/Navigation/MainNavigation";
import { AuthContext } from "./components/context/auth-context";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./components/hooks/auth-hook";
import "./App.css";
import LoadingSpinner from "./components/UIElements/LoadingSpinner";

const Users = React.lazy(() => import("./components/User/Pages/Users"));
const Auth = React.lazy(() => import("./components/User/Pages/Auth"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
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
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
