import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  userIdAdmin: "600ac50b2f18ea08293cc585",
  token: null,
  login: () => {},
  logout: () => {},
});
