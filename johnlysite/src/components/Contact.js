import { useState, useEffect } from "react";

import { Box, Typography, Divider, Container } from "@mui/material";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1800) {
      setShowContact(true);
    } else {
      setShowContact(false);
    }
  };

  return (
    <Box
    id="contact" 
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        minHeight: "80vh",
        padding: "2rem",
        backgroundColor: "#0e0f1f",
        opacity: showContact ? "1" : "0",
        transition: "opacity 0.5s ease-in-out",
        marginLeft: "3rem",
      }}
      >
      <Divider
        sx={{ my: 4, borderColor: "#177878", border: "2px solid #177878" }}
      />
      <Typography variant="h3" sx={{ color: "white" }}>
        Let's get in touch!
      </Typography>
      <Container>
        
      </Container>
    </Box>
  );
}

export default Contact;
