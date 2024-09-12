import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/About.module.css";
import btnStyles from "../styles/Button.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <Container className={styles.Content}>
    <h2>
      <strong>About Us</strong>
    </h2>
    <hr />
    <p>
      Explore a vibrant online community designed exclusively for passionate artists like you! ARTiza is the ultimate destination to connect, share, and be inspired.
    </p>
    <p>
      Whether you're a seasoned professional or an enthusiastic beginner, ARTiza offers a welcoming space where you can showcase your creativity, discover new talents, 
      and engage with fellow artists from around the globe. Share your unique vision, find inspiration in the work of others, and be part of a dynamic community that celebrates the power of art.
    </p>
    <hr />
    <h3>
        <strong>Here's what you can do on ARTiza</strong>
    </h3>
    <ul className="list-unstyled">
      <li>Share Your Best Art: Showcase your creativity and let your work shine in the ARTiza community.</li>
      <li>Discover Amazing Content: Explore a diverse range of artwork from talented artists around the globe and find inspiration in every corner.</li>
      <li>Connect with Like-Minded Individuals: Engage with fellow creatives, build meaningful connections, and collaborate with others who share your passion.</li>
      <li></li>
    </ul>
    <p>
      Ready to Dive In? Join ARTiza today and embark on an exciting journey filled with creativity and inspiration!
    </p>
    <Container className="mt-3">
        <Link className={styles.Link} to="/signup">
        <Button className={`${btnStyles.Button} ${btnStyles.Bright}`}>
            Sign Up
        </Button>
        </Link>
    </Container>
    <hr />
    <h4><strong>Connect with us</strong></h4>
   
    <Row className={styles.SocialIconsAlign}>
        <a
          href="https://github.com/Linnea87/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Github page (opens in a new tab)"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/linnéa-ternevik-596702290"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Linkedin page (opens in a new tab)"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/artbylinneawanda/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
        >
          <i className="fa-brands fa-instagram" />
        </a>
    </Row>
    <br />
    <div id={styles.Footer}>
      <p >&copy; 2024 ARTiza <br/>All rights reserved</p>
      Project created for educational purposes only          
   </div>
  </Container>
  );
}

export default About;