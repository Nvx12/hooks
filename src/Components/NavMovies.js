import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const NavMovies = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
            <LinkContainer to='/'>
          <Navbar.Brand >Movies App</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to='/'>
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/MovieList'>
            <Nav.Link>Movies list</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavMovies;
