import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import theme from "../theme";

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
