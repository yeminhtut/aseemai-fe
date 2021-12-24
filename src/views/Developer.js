import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Alert,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";

import Select from "react-select";

// core components
import DemoNavbar from "components/Navbars/SiteNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Developer = (props) => {
  const { createDeveloper, isLoadingCreateDeveloper, createdDeveloper } = props;
  const [skills, setSkills] = useState([]);
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (createdDeveloper && createdDeveloper._id) {
      console.log('gooo', createdDeveloper)
      setShowAlert(true)
    }
  }, [createdDeveloper])
  const handleSubmit = (values) => {
    const data = {
      ...values,
      skills,
    };
    createDeveloper(data);
  };

  const handleSkillChange = (data) => {
    setSkills(data);
  };

  const skillOptions = [
    { value: "HTML", label: "HTML" },
    { value: "React", label: "React" },
    { value: "Android", label: "Android" },
  ];
  const hideAlert = showAlert => {
    setShowAlert(!showAlert)
  }
  return (
    <>
      <DemoNavbar />
      <main>
        {showAlert && (
          <div
          style={{
            position: "absolute",
            top: "70px",
            textAlign: "center",
            width: "100%",
            zIndex: '100'
          }}
        >
          <Alert color="success" toggle={hideAlert}>
            Your profile has been saved.
          </Alert>
        </div>
        )}
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white">
                    <div className="text-muted text-center">
                      <h2>Join Us</h2>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                      initialValues={{
                        email: "",
                        name: "",
                        role: "",
                        linkedUrl: "",
                        githubUrl: "",
                        rate: "",
                        about: "",
                      }}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <FormGroup>
                            <Label className="me-sm-2" for="email">
                              Email
                            </Label>
                            <Field
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="me-sm-2" for="name">
                              Name
                            </Label>
                            <Field
                              type="text"
                              name="name"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="me-sm-2" for="role">
                              Recent Role
                            </Label>
                            <Field
                              type="text"
                              name="role"
                              className="form-control"
                              placeholder="Senior Software Engineer"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="me-sm-2" for="role">
                              Minimum hourly rate (USD)
                            </Label>
                            <Field
                              type="number"
                              name="rate"
                              className="form-control"
                              placeholder=""
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="me-sm-2" for="role">
                              Skills
                            </Label>
                            <Select
                              className="basic-multi-select"
                              isMulti
                              options={skillOptions}
                              onChange={handleSkillChange}
                              classNamePrefix="select"
                              placeholder="HTML, React, JavaScript, Postgres, SQL, ..."
                            />
                          </FormGroup>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label className="me-sm-2" for="role">
                                  Linkedin Url
                                </Label>
                                <Field
                                  type="text"
                                  name="linkedUrl"
                                  className="form-control"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label className="me-sm-2" for="role">
                                  Github Url
                                </Label>
                                <Field
                                  type="text"
                                  name="githubUrl"
                                  className="form-control"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup>
                            <Label className="me-sm-2" for="role">
                              About
                            </Label>
                            <Field
                              type="text"
                              name="about"
                              className="form-control"
                              component="textarea"
                            />
                          </FormGroup>
                          <div className="text-center">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="my-4 px-8 btn btn-primary"
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Developer;
