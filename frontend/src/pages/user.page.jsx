import { Box, Paper, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AppStoreContext } from "../App";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PassTests from "../stores/PassTests";

export default function UserPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const appStore = useContext(AppStoreContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const passTest = PassTests;

  React.useEffect(() => {
    setLoading(true);
    appStore.authStore.mgr.getUser().then(function (user) {
      if (user != null) {
        fetch("http://localhost:5013/Test", {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .then(() => setLoading(false));
        setUser(user);
      }
    });
  }, []);
  return (
    <>
      {(loading && (
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "primary.light",
            display: "flex",
            justifyContent: "center",
            fontFamily: "-apple-system",
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      )) || (
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
          <Box width={700}>
            <Paper elevation={10} sx={{ width: "20", padding: "10px" }}>
              <Typography variant="h3" sx={{ paddingLeft: "10px" }}>
                List of tests
              </Typography>
              <TableContainer component={Paper} sx={{ paddingTop: "30px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>№</TableCell>
                      <TableCell align="center">TestName</TableCell>
                      <TableCell align="center">Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.Name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.Id}
                        </TableCell>
                        <TableCell align="center">{row.Name}</TableCell>
                        <TableCell align="center">
                          {(!passTest.passTests && (
                            <Button
                              variant="button"
                              component={NavLink}
                              to={`/test/${row.Name}`}
                            >
                              Take test
                            </Button>
                          )) ||
                            ` ${passTest.testScore}`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </Box>
      )}
    </>
  );
}
