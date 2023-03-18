import React, { useState, useEffect,  useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const aboutRef= useRef(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#0e0f1f", color: "#a6a6a6" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", margin: '0 2rem' }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          >
            <Typography variant="h5" sx={{color: '#FFBF00', cursor: "pointer"}}>john ly</Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {showMenu ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={700}
            >
              <Button
                color="inherit"
                sx={{ textTransform: "lowercase",
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#FFBF00',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::before': {
                  width: '90%',
                }, fontSize: "18px", paddingRight: '1.5rem' }}
              >
                <ChevronRightRoundedIcon sx={{color: '#FFBF00'}} />
                About
              </Button>
            </Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={700}
            >
              <Button
                color="inherit"
                sx={{ textTransform: "lowercase",
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#FFBF00',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::before': {
                  width: '90%',
                }, fontSize: "18px", paddingRight: '1.5rem' }}
              >
                <ChevronRightRoundedIcon sx={{color: '#FFBF00'}} />
                Projects
              </Button>
            </Link>
              <Button
                color="inherit"
                sx={{ textTransform: "lowercase",
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#FFBF00',
                  transition: 'width 0.4s ease-in-out',
                },
                '&:hover::before': {
                  width: '90%',
                }, fontSize: "18px", paddingRight: '1.5rem' }}
              >
                <Link
                to='contact'
                smooth={true}
                duration={700}
                >
                </Link>
                <ChevronRightRoundedIcon sx={{color: '#FFBF00'}} />
                Contact
              </Button>
              <Button
                color="inherit"
                sx={{
                  border: "2px solid #a6a6a6",
                  borderRadius: "10px",
                  textTransform: "lowercase",
                  fontSize: "18px",
                  '&:hover': {
                    backgroundColor: '#a6a6a6',
                    color: 'black',
                  },
                }}
              >
                Resume
              </Button>
            </>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link to='/' smooth={true} duration={700}>Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='about' smooth={true} duration={700}>About</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='projects' smooth={true} duration={700}>Projects</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='contact' smooth={true} duration={700}>Contact</Link></MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
