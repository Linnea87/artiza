import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signupimg from "../../assets/signupimg.png";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className={styles.FullScreen}>
      <div className={`${styles.Row} ${styles.Overlay}`}>
        <div className="text-center text-md-left ml-3 d-none d-lg-block p-0 p-lg-2 ">
          <Image
            className={`${appStyles.FillerImage}`}
            src={signupimg}
            alt="signin image"
          />
        </div>
        <Col className="my-auto p-0 p-md-2" md={6}>
          <Row className="justify-content-center">
            <Col xs={10} sm={6} md={10} lg={8}>
              <Container className={`${styles.Form} p-4 `}>
                <h1 className={styles.Header}>sign up</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.username?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Password"
                      name="password1"
                      value={password1}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.password1?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <Form.Group controlId="password2">
                    <Form.Label className="d-none">Confirm password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Confirm password"
                      name="password2"
                      value={password2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.password2?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <Button
                    className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                    type="submit"
                  >
                    Sign up
                  </Button>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert variant="warning" key={idx} className="mt-3">
                      {message}
                    </Alert>
                  ))}
                </Form>
                <Link className={`${styles.Link} mt-3`} to="/signin">
                  Already have an account? <span>Sign in</span>
                </Link>
              </Container>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default SignUpForm;
