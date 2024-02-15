import React, { useContext } from "react";
import { AppStoreContext } from "../App";
import { observer } from "mobx-react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

function Navbar() {
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

  const logOut = () => store.authStore.logout();
  const login = () => store.authStore.login();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.dark",
        padding: "10px",
        width: "auto",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "50%",
          marginLeft: "10px",
          textTransform: "uppercase",
          fontWeight: "medium",
        }}
      >
        <Typography variant="h4" sx={{ paddingTop: "5px" }}>
          TestPage
        </Typography>
      </Box>

      {(!!user && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "50%",
            marginRight: "10px",
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
        >
          <Typography variant="h6" sx={{ paddingTop: "5px" }}>
            {user.profile.name}
          </Typography>
          <Button
            key="logout"
            onClick={logOut}
            color="black"
            underline="none"
            variant="button"
            sx={{
              fontSize: "large",
              marginLeft: "2rem",
            }}
          >
            Sign out
          </Button>
        </Box>
      )) || (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: "6px",
            width: "50%",
            marginRight: "10px",
          }}
        >
          <Button
            key="login"
            onClick={(event) => {
              login();
            }}
            color="black"
            underline="none"
            variant="button"
            sx={{
              fontSize: "large",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
              Log in
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default observer(Navbar);
