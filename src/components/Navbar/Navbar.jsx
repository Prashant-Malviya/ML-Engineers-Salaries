import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import floqerImg from "../../Img/floqer.png"
 
function NavbarMenu() {


  return (
    <Navbar expand="lg" className="bg-blue-50 shadow-md fixed-top">
      <Container fluid>
        <Link to={"/"} className="no-underline">
        <Navbar.Brand href="#" className="flex flex-row space-x-2 lg:mr-5 md:mr-0 mr-0">
          <img
            src={floqerImg}
            alt="course image"
            className="w-12 h-12 rounded-full"
          />{" "}
          
          <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 bg-clip-text text-transparent my-auto ">Floqer</p>
          
        </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 space-x-5 font-bold ml-3"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Link to={"/"} className="no-underline">
              <Navbar.Text className="lg:ml-0 md:ml-5 ml-5">Home</Navbar.Text>
            </Link>
            <Link to={"/salaries"} className="no-underline">
              <Navbar.Text>Salaries</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/chat-app"}>
              <Navbar.Text>Chat App</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/contact"}>
              <Navbar.Text>Contact Us</Navbar.Text>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by name or instructor"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;