import React, { useContext } from "react";
import { AppStoreContext } from "../../App";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import PassTests from "../../stores/PassTests";

export default function Result(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const appStore = useContext(AppStoreContext);
  const passTest = PassTests;
  passTest.passTests = true;
  passTest.testScore = props.correct;

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.light",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 300,
          backgroundColor: "primary.dark",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          borderRadius: "30px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Your score is {props.correct}</Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Button
            component={NavLink}
            to={`/test`}
            color="inherit"
            underline="none"
            variant="contained"
          >
            <Typography variant="h5">User page</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
