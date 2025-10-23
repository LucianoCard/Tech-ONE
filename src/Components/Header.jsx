import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary glow-border border-top-0 p-4 "
    >
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="/home" className="tech-one">
          Tech-One
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Productos" className="tech-one">
              [Productos]
            </Nav.Link>
            <Nav.Link href="/Ofertas" className="tech-one">
              [Ofertas]
            </Nav.Link>
            <Nav.Link href="/Sobre-nosotros" className="tech-one">
              [Sobre nosotros]
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="tech-one">
              <i class="bi bi-person"></i>[Registrarse]
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="tech-one">
              <i className="bi bi-cart"></i>[Carrito]
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
