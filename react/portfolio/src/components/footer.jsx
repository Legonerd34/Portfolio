import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 4,
        padding: 2,
        backgroundColor: "transparent",
        color: "neutral.600",
      }}
    >
      {/* Divider Line */}
      <Divider sx={{ marginBottom: 2, borderColor: "lightgray" }} />

      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Name and Year */}
        <Typography level="body-md" sx={{ color: "lightgray" }}>
          {currentYear} Max Bushell
        </Typography>

        {/* GitHub Icon Link */}
        <Link
          href="https://github.com/Legonerd34"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
        </Link>

        {/* LinkedIn Icon Link */}
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
