import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";

import { ChevronRightRounded } from "@mui/icons-material";

function AboutMe() {
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
        I am a software engineer with experience in building web applications
        using modern web development technologies such as React, Redux, Node.js,
        and MongoDB. My passion for software development started during my
        undergraduate studies in computer science, and I have been honing my
        skills ever since. In my free time, I enjoy working on personal projects
        and contributing to open source software. I am also an avid hiker and
        enjoy spending time outdoors.
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

export default AboutMe;
