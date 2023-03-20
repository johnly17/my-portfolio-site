import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider, Link } from "@mui/material";

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
    <div
      className="contact-container"
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        minHeight: "100vh",
        backgroundColor: "#0e0f1f",
        opacity: showContact ? "1" : "0",
        transition: "opacity 0.5s ease-in-out",
        margin: "0 3rem",
        justifyContent: "center",
      }}
    >
      <Divider
        sx={{ my: 4, borderColor: "#177878", border: "2px solid #177878" }}
      />
      <h1 style={{ color: "#FFBB00", marginBottom: "2rem" }}>
        Let's get in touch!
      </h1>
      <div className="contact-info">
        <p>
          I'm currently looking for an opportunity as a software developer
          position on a team that values communication and hard work. If you
          have any questions, please feel free to reach out and I should respond
          within a day. Thank you so much!
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="https://www.linkedin.com/in/john-ly-906013183/"
            color="inherit"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/johnly17"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
      <div className="form-container" method="post">
        <form className="contact">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required /> 
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
            <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            style={{ padding: "15px", width: "100%" }}
          ></textarea>
          <button
            type="submit"
            style={{
              margin: "1rem auto 0 auto",
              width: "15%",
              borderRadius: "8px",
              padding: "5px 0",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
