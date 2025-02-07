import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" style="background-color: #221f1f !important">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../assets/img/logo.png" style={{ width: "100px" }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
