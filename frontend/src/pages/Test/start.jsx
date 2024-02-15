import { Box, Paper, Typography, Button } from "@mui/material";
import React from "react";

export default function Start({ questions, onClickVariant }) {
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
          height: "auto",
          backgroundColor: "primary.dark",
          flexDirection: "column",
          borderRadius: "30px",
        }}
      >
        <Box sx={{ paddingLeft: "20px" }}>
          <Typography
            variant="h4"
            sx={{ paddingTop: "30px", paddingLeft: "30px" }}
          >
            {questions.Titel}
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <Typography variant="h6">
            <ul>
              {questions.Variants.map((text, index) => {
                return (
                  <ol onClick={() => onClickVariant(index)} key={text}>
                    <input type="radio" name="opinions" id="radio-1" />
                    <label htmlFor="radio-1"></label>
                    <label htmlFor="radio-1">{text}</label>
                  </ol>
                );
              })}
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
