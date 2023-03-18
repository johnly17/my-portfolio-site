import { useState, useEffect } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";

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
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setShowAboutMe(true);
    } else {
      setShowAboutMe(false);
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
        opacity: showAboutMe ? "1" : "0",
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
      <Container style={{ display: "flex", gap: "1rem" }}>
        <Card
          sx={{
            maxWidth: 345,
            height: expanded ? 600 : 450,
            background: "inherit",
            border: "2px solid #177878",
            padding: '10px'
          }}
        >
          <CardHeader title="Soccer Connect" sx={{ color: "#a6a6a6" }} />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#a6a6a6" }}
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleExpandClick} id="card1-expand">
              <ExpandMoreIcon sx={{ color: "#FFBF00 !important" }} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Tech:</Typography>
              <Typography paragraph>React.js, Ruby</Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
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
          <CardHeader title="To-Do List" sx={{ color: "#a6a6a6" }} />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#a6a6a6" }}
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
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
      </Container>
    </Box>
  );
}

export default Projects;
