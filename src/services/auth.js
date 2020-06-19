import decode from "jwt-decode";
export const TOKEN_KEY = "@r2d2/token";
export const ADMIN = "@r2d2:admin";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, admin) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ADMIN, JSON.stringify(admin));
};
export const isTokenExpired = () => {
  try {
    const decoded = decode(getToken());
    console.log(decoded);
    const date = new Date() / 1000;
    console.log(date);

    if (decoded.exp < date) {
      return true;
    }

    return false;
  } catch (err) {
    console.log("Expired check failed!");
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
