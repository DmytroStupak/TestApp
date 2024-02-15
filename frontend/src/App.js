import React, { createContext, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import appRoutes from "./router";
import AuthStore from "./stores/AuthStore";
import PassTests from "./stores/PassTests";
import { RouterProvider } from "react-router-dom";
import theme from "./theme";

const store = {
  authStore: new AuthStore(),
};
export const AppStoreContext = createContext(store);
export const AuthConsumer = AppStoreContext.Consumer;
function App() {
  const [appStore, setAppStore] = useState(store);
  function onSigninCallback() {
    window.location = "index.html";
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={appRoutes}>
        <AppStoreContext.Provider value={appStore}></AppStoreContext.Provider>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
