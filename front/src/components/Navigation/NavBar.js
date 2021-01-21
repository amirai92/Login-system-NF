import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Backdrop from "../UIElements/Backdrop";
const NavBar = () => {
  const [user, setUser] = useState("Guest");
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  useEffect(() => {
    //go to local-storage and check the name of the user
  }, []);
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <Navbar bg="light" expand="lg" oncClick={openDrawer}>
        <Navbar.Brand href="/">Amir Aizin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/auth">AUTHENTICATE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;

/*


*/
