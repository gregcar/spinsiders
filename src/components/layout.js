import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const Layout = ({ location, subsitepath, title, siteDescription, bannerImage, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const aboutPath = subsitepath + "/about"
  let header

  if (isRootPath) {
    header = (
      <h2 className="main-heading bg-primary">
        <Link to="/">{title}</Link>
      </h2>
    )
  } else {
    header = (
      <div>
        <Row className="d-flex align-items-center">
          <Col lg={8}>
            <h2>
              <Link to={subsitepath}>{title}</Link>
            </h2>
          </Col>
          <Col className="text-lg-right text-md-right">
            <h8>
              {siteDescription}
            </h8>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid={bannerImage} alt="" /> 
          </Col> 
        </Row>
        <Row>
          <Col>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={subsitepath}>Home</Nav.Link>
                  <Nav.Link href={aboutPath}>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Col>
        </Row>
      </div>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Container fluid>
        <Container>
          <header>{header}</header>
        </Container>     
        <Container>
          <main>{children}</main>
        </Container>    
        <Container>
          <footer>
            <Link to="/">SPInsiders</Link> © {new Date().getFullYear()}
          </footer>
        </Container>  
      </Container>  
    </div>
  )
}

export default Layout
