import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function NavBar() {
  let navigate = useNavigate();

  // let navigate = useNavigate();

  function signOutMethod() {
    localStorage.clear();
    // this.history.props.push('/')
    navigate("/login");
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="navbarAlign"
    >
      <Container fluid>
        <Navbar.Brand as={Link} className="navbarName" to="">
          CattyLove
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <form method="get" action="http://192.168.2.133/doorOpen">
          <Button bsStyle="primary" type="submit">Door Open</Button>
        </form>
        <form method="get" action="http://192.168.2.133/doorClose">
          <Button bsStyle="primary" type="submit">Door Close</Button>
        </form>
      </Container>
    </Navbar>
  );
}
export default NavBar;
