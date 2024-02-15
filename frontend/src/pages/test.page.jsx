import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AppStoreContext } from "../App";
import { useState } from "react";
import UserPage from "./user.page";

export default function TestPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const store = useContext(AppStoreContext);

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    store.authStore.mgr.getUser().then(function (user) {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return (
    <>
      {(!user && (
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "primary.light",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            paddingTop: "40px",
            justifyItems: "center",
          }}
        >
          <Box width={500}>
            <Paper elevation={10} sx={{ width: "20", padding: "10px" }}>
              <Typography variant="h3">Good!</Typography>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                You must log in if you want to pass this test
              </Typography>
              <Button
                onClick={(event) => {
                  store.authStore.login();
                }}
              >
                Login
              </Button>
            </Paper>
          </Box>
        </Box>
      )) || <UserPage />}
    </>
  );
}
