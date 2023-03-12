import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 2rem',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'left',
        color: '#a6a6a6'
      }}
    >
      <Typography variant="h4" sx={{color: '#FFBF00'}} gutterBottom>
        Hi, my name is
      </Typography>
      <Typography variant="h2" sx={{color: 'white'}} gutterBottom>
        John Ly
      </Typography>
      <Typography variant="body1" gutterBottom>
        A software engineer with a passion for creating beautful and scalable digital experiences.
      </Typography>
      <Box>
      <LinkedInIcon sx={{marginRight: '.5rem'}}/>
      <GitHubIcon />
      </Box>
    </Box>
  );
};

export default About;


