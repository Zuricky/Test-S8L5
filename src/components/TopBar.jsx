import { Container, Nav, Navbar } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="ms-3" data-bs-theme="dark" style={{ background: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="https://www.netflix.com/browse" target="_blank">
          <img src="../public/logo.png" style={{ width: "100px" }} alt="Epiflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" active>
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="d-flex ms-auto align-items-center">
            <a>
              <Search size={20} color="white" className="mx-2" />
            </a>
            <div id="kids" className="fw-bold mx-2">
              KIDS
            </div>
            <a>
              <Bell size={20} color="white" className="mx-2" />
            </a>
            <a>
              <PersonCircle size={20} color="white" className="ms-4 me-2" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
