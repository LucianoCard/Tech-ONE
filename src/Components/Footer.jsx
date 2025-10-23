import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container fluid className="glow-border border-bottom-0  ">
        <Row className="bg-body-tertiary tech-one p-4 border-bottom-0">
          <Col className="mx-5">
            <Stack>
              <Image
                src="src\Components\imagenLOGO\f35f8dcd-d875-4706-b6db-36c7791c4956.jpg"
                alt="Company logo"
                rounded
                width={150}
                height={150}
              />

              <h2>Tech-One</h2>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-colum fs-5">
              <NavLink href="#" className="tech-one">
                Home
              </NavLink>
              <NavLink href="#" className="tech-one">
                Products
              </NavLink>
              <NavLink href="#" className="tech-one">
                About us
              </NavLink>
              <NavLink href="#" className="tech-one">
                Ofertas
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <h4>Contact us!</h4>
            <p>Email:</p>
            <p>Phone:</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
