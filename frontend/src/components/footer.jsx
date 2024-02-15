import { Box, Container, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        backgroundColor: "primary.dark",
        padding: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h7">
              Test Factory
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="h9">
              {`${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
