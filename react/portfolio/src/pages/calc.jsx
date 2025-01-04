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
          I use discord alot in my personal time and I thought it would be intersting to try and create some of my own discord apps.
           I created this ChatGPT app which enables ChatGPT to be used and displayed on the chat itself.
           Any member can use it without leaving the chat. It uses JavaScript and NodeScript, more information can be found at the <a href="https://github.com/Legonerd34/ChatGPT-discord-bot">Github page.</a>
        </Typography>
        <br/>
        <img src="https://legonerd34.github.io/Portfolio/Screenshot 2025-01-03 at 13.35.48.png"/>
      </Box>
    </Box>
  );
}

export default Calc;
