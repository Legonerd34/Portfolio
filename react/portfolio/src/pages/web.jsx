import React from "react";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";

function Web() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 4,
        maxWidth: "3000px",
        margin: "auto",
      }}
    >
      {/* Paragraph at the Top */}
      <Typography
        level="h1"
        sx={{
          textAlign: "center",
          marginBottom: 2,
          color: "white",
        }}
      >
        Web Design
      </Typography>
      <Typography
        level="body-lg"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          color: "lightgray",
        }}
      >
        Below is an example of my web design work. This embedded website
        showcases my ability to create clean, responsive, and user-friendly
        designs.
      </Typography>

      {/* Card for the Embedded Website */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 3000,
          height: "1200px", // Adjust height as needed
          overflow: "hidden",
          borderRadius: "md",
          boxShadow: "lg",
        }}
      >
        <CardContent sx={{ height: "100%", padding: 0 }}>
          <Box
            component="object"
            type="text/html"
            data="https://www.angelagreenwood.net"
            sx={{
              width: "100%",
              height: "100%",
              border: "none", // Removes object border
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Web;
