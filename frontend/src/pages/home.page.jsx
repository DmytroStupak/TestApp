import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppStoreContext } from "../App";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
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
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.light",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        fontFamily: "-apple-system",
        paddingTop: "40px",
        justifyItems: "center",
      }}
    >
      <Box width={600}>
        <Paper elevation={10} sx={{ padding: "10px" }}>
          <Typography variant="h3">Welcome to the tests page!</Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "medium", paddingTop: "10px" }}
          >
            If you are ready to take the test, click "Let's start"
          </Typography>
          <Button component={NavLink} to="/test">
            Let's start
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
