import React, { useEffect } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/SiteNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

import {
  Card,
  CardBody,
  Col
} from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Index = props => {
  const { getCustomers } = props
  return (
    <>
        <DemoNavbar />
        <main>
          <Hero />
          <section className="section section-lg pt-lg-0">
            <Container>
            <Row className="justify-content-center" style={{ paddingTop: '4rem'}}>
              <Col lg="12">
                {/* Basic elements */}
                <h2 className="mb-5">
                  <span>TRUSTED BY </span>
                </h2>
                {/* Buttons */}
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img
                            alt="..."
                            src={require("assets/img/brand/delivery_hero.png")}
                            style={{ width: '100%' }}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img
                            alt="..."
                            src={require("assets/img/brand/tvs.png")}
                            style={{ width: '100%', height: '142px' }}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img
                            alt="..."
                            src={require("assets/img/brand/eatigo.png")}
                            style={{ width: '100%', height: '142px' }}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
  )
}

export default Index;
