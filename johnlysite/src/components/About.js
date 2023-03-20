import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";

import { ChevronRightRounded } from "@mui/icons-material";

function About() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowAboutMe(true);
    } else {
      setShowAboutMe(false);
    }
  };

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#0e0f1f",
        opacity: showAboutMe ? "1" : "0",
        transition: "opacity 0.5s ease-in-out",
        marginLeft: "3rem",
      }}
    >
      <Typography variant="h4" color="white" align="left" gutterBottom>
        <Divider sx={{ my: 4, borderColor: "#177878", border: '2px solid #177878' }} />
        <ChevronRightRounded sx={{ color: "#FFBF00 !important" }} />
        About Me
      </Typography>
      <Typography
        variant="body1"
        align="left"
        color="#a6a6a6"
        sx={{ width: "70%" }}
        gutterBottom
      >
        Hello! My name is John and I enjoy becoming a better developer. My interest for software engineer began after I graduated from college and self-taught myself HTML, CSS, and JavaScript. I then enrolled in a full-stack software engineering bootcamp where I learned React and took my web development skills to another level. Currently, I am continuing to work on my bootcamp's capstone project, Soccer Connect, to improve user experiences by adding more functionality! 
      </Typography>
      <Box >
        <Typography
          variant="h6"
          align="left"
          color="#FFBF00"
          sx={{ width: "70%", padding: "30px 0 10px 0" }}
          gutterBottom
        >
          Technologies I'm Using:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", color: '$a6a6a6' }}>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            JavaScript,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            React,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            PHP,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            Ruby,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            Ruby on Rails,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            SQLite,
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }} color="#a6a6a6">
            PostgreSQL
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
