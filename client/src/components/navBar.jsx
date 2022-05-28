import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cats" className="navBarItem">
              Cats
            </Nav.Link>
            <Nav.Link as={Link} className="navBarItem" to="addCat">
              AddCat
            </Nav.Link>
          </Nav>
            <Nav.Link className="navBarItem" as={Link} to="wishLists" style={{color: "yellow"}}>
            {/* <a className="svg-btn-wishlist"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmark-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            {/* </a> */}
          </Nav.Link>
          <Nav>
          <Nav.Link as={Link} to="updateUser">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="25"
                fill="currentColor"
                class="bi bi-person-fill"

                viewBox="0 0 18 18"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
            <Nav.Link onClick={signOutMethod}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
