import React from "react"
import { Link } from "gatsby"
import syle from "./layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = ({ location, title, children }) => {
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
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Container>
        <header>{header}</header>
      </Container>     
      <Container>
        <main>{children}</main>
      </Container>    
      <Container>
        <footer>
          SPInsiders © {new Date().getFullYear()}
        </footer>
      </Container>    
    </div>
  )
}

export default Layout
