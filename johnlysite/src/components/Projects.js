import { useState, useEffect } from "react";
import { Box, Typography, Divider, Container, Link } from "@mui/material";

import video1 from "./videos/Soccer Connect - 19 March 2023.mp4"

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ChevronRightRounded } from "@mui/icons-material";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpand3 = () => {
    setExpanded3(!expanded3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setShowProjects(true);
    } else {
        setShowProjects(false);
    }
  };

  return (
    <Box
        id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        textAlign: "left",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#0e0f1f",
        opacity: showProjects ? "1" : "0",
        transition: "opacity 0.5s ease-in-out",
        marginLeft: "3rem",
      }}
    >
      <Divider
        sx={{ my: 4, borderColor: "#177878", border: "2px solid #177878" }}
      />
      <Typography variant="h4" color="white" gutterBottom>
        <ChevronRightRounded sx={{ color: "#FFBF00 !important" }} />
        Projects
      </Typography>
      <Container className="projects-container" style={{ display: "flex", gap: "1rem" }}>
        <Card
          sx={{
            maxWidth: 345,
            height: expanded ? 680 : 450,
            background: "inherit",
            border: "2px solid #177878",
            padding: '10px'
          }}
        >
          <CardHeader title="Soccer Connect" sx={{ color: "white" }} />
          <CardMedia
            component="iframe"
            height="194"
            image={video1}
          />
          <CardContent>
            <Typography variant="h5" color="#FFBF00">
                Purpose:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#a6a6a6", overflow: 'hidden' }}
            >
              A full-stack application that allows soccer players in the United States to host and sign up for pick up matches near them.
              <br />
            <Link href='https://soccer-connect.onrender.com/' target='_blank' underline='none'>Live Demo</Link>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpandClick} id="card1-expand">
              <ExpandMoreIcon sx={{ color: "#FFBF00 !important" }} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph color='white'>Tech:</Typography>
              <Typography sx={{fontSize: '.8rem'}} color='#177878' gutterBottom>React.js, Ruby, Google Maps API, Material UI, PostgreSQL, BCrypt Auth</Typography>
              <Typography color={'white'} gutterBottom>In Progress:</Typography>
                <ul style={{color: '#177878', fontSize: '.8rem', marginLeft: '.7rem'}}>
                    <li>Logout function can be buggy</li>
                    <li>Implement search autofil</li>
                    <li>Add new event validations, correct date and time format, valid address</li>
                    <li>Allow users to upload images for profile pictures</li>
                </ul>
            </CardContent>
          </Collapse>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            height: expanded2 ? 600 : 450,
            background: "inherit",
            border: "2px solid #177878",
            padding: "10px",
          }}
        >
          <CardHeader title="To-Do List" sx={{ color: "white" }} />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
          <Typography variant="h5" color="#FFBF00">
                Purpose:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#a6a6a6" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at congue erat.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpand2} id="card2-expand">
              <ExpandMoreIcon sx={{ color: "#FFBF00 !important" }} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Tech:</Typography>
              <Typography paragraph>Chicken</Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            height: expanded3 ? 600 : 450,
            background: "inherit",
            border: "2px solid #177878",
            padding: "10px",
          }}
        >
          <CardHeader title="Show Finder" sx={{ color: "#a6a6a6" }} />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
          <Typography variant="h5" color="#FFBF00">
                Purpose:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#a6a6a6" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at congue erat.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpand3} id="card2-expand">
              <ExpandMoreIcon sx={{ color: "#FFBF00 !important" }} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Tech:</Typography>
              <Typography paragraph>Chicken</Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;
