import React from "react"
import { Link } from "gatsby"
import syle from "./layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = ({ location, subsitepath, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        <Link to={subsitepath}>{title}</Link>
      </h1>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Container>
        <Container>
          <header>{header}</header>
          <div>
            <span>Location is {location.pathname}</span>
          </div>
        </Container>     
        <Container>
          <main>{children}</main>
        </Container>    
        <Container>
          <footer>
            SPInsiders © {new Date().getFullYear()}
          </footer>
        </Container>  
      </Container>  
    </div>
  )
}

export default Layout
