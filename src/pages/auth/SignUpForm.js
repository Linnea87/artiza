import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";



const SignUpForm = () => {
    return (
        <div className={styles.FullScreen}>
            <div className={`${styles.Row} ${styles.Overlay}`}>
                <div className="text-center text-md-left ml-3 d-none d-lg-block p-0 p-lg-2 ">
                    <h4 className="font-weight-bold">Join our community of ARTiza!</h4>   
                </div>
                <Col className="my-auto p-0 p-md-2" md={6}>
                    <Row className="justify-content-center">
                        <Col xs= {10} sm={6} md={10} lg={8}>
                            <Container className={`${styles.Form} p-4 `}>
                                <h1 className={styles.Header}>sign up</h1>
                                <Form>
                                    <Form.Group controlId="username">
                                        <Form.Label className="d-none">Username</Form.Label>
                                        <Form.Control 
                                            className={styles.Input}
                                            type="text" 
                                            placeholder="Username" 
                                            name="username" 
                                        /> 
                                    </Form.Group>
                                        
                                    <Form.Group controlId="Password1">
                                        <Form.Label className="d-none">Password</Form.Label>
                                        <Form.Control 
                                            className={styles.Input}
                                            type="password" 
                                            placeholder="Password" 
                                            name="password1" 
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Password2">
                                        <Form.Label className="d-none">Confirm password</Form.Label>
                                        <Form.Control 
                                            className={styles.Input}
                                            type="password" 
                                            placeholder="Confirm password" 
                                            name="password2" 
                                        />
                                    </Form.Group>
                                    <Button 
                                        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} 
                                        type="submit"
                                    >
                                        Sign up
                                    </Button>
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