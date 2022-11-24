// import Link from "next/link";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" className="navbar-brand">
            Home
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                href="/register"
                className="nav-link btn btn-primary btn-sm text-white shadow border-0 me-3"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="nav-link btn btn-success btn-sm text-white shadow border-0 me-3"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;