import React, { useState } from "react";
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import "../index.css";
import Highlight from "react-highlight";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

function Calc() {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: 1200,
        margin: "auto",
        color: "white",
      }}
    >
      {/* Title and Description */}
      <Box sx={{ textAlign: "center" }}>
        <Typography level="h1" sx={{ color: "white", marginBottom: 2 }}>
          Discord Apps
        </Typography>
        <Typography level="body-lg" sx={{ color: "lightgray" }}>
          <img src="https://legonerd34.github.io/Portfolio/Screenshot 2025-01-03 at 13.35.48.png"/>
        </Typography>
      </Box>
    </Box>
  );
}

export default Calc;
