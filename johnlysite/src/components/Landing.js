import { Box, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "./images/image.jpeg"


function Landing() {
  return (
    <Box
      id="/"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "left",
        color: "#a6a6a6",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "600px",
          margin: "0 2rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#FFBF00" }} gutterBottom>
          Hi, my name is
        </Typography>
        <Typography variant="h2" sx={{ color: "white" }} gutterBottom>
          John Ly
        </Typography>
        <Typography variant="body1" gutterBottom>
          A software engineer with a passion for creating beautiful and scalable
          digital experiences.
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "1rem" }}
        >
          <Link
            href="https://www.linkedin.com/in/john-ly-906013183/"
            color="inherit"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/johnly17" color="inherit" target="_blank">
            <GitHubIcon />
          </Link>
          {/* still need href */}
          <Link
            component="button"
            color="inherit"
            underline="hover"
            sx={{
              border: "2px solid #a6a6a6",
              borderRadius: "13px",
              padding: "6px",
              fontSize: "11px",
            }}
          >
            resume
          </Link>
        </Box>
      </Box>
      <Box>
        <img src={image} alt="profile pic" style={{width: '350px', height: '400px', borderRadius: '15px'}}/>
      </Box>
    </Box>
  );
};


export default Landing;
