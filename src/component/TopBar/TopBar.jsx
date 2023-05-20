import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./TopNav.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>

      <Navbar className="navbar" sticky="top" bg="light" expand="lg" dir="rtl">
        <Container fluid>

          <Navbar.Brand href="/">
            <img src="images/logo.png" width={80} alt="Fomo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            
            <Nav
              className="mx-5 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              <Nav.Link className="mx-3">
                <Link className="link" to="/">
                  خانه
                </Link>
              </Nav.Link>

              <Nav.Link className="mx-3" href="#action2">
                <Link className="link" to="/products">
                  فروشگاه
                </Link>
              </Nav.Link>


              <NavDropdown title="محصولات" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/products" className="link">
                    همبرگر
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products" className="link">
                    پیتزا
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products" className="link">
                    ساندویچ
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/products" className="link">
                    سالاد
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products" className="link">
                    نوشیدنی
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link className="mx-3">
                <Link className="link" to="/menu">
                  منو
                </Link>
              </Nav.Link>

              <Nav.Link className="mx-3">کد تخفیف</Nav.Link>

              <Nav.Link className="mx-3">
                <Link className="link" to="/branches">
                  شعبات
                </Link>
              </Nav.Link>

              <Nav.Link className="mx-3">
                <Link className="link" to="/about">
                  درباره ی ما
                </Link>
              </Nav.Link>

            </Nav>


            <div className="navIconContainer">

              <div className="navIconWrapper">
                <Link to="/search">
                  <BsSearch className="navIcon" />
                </Link>
              </div>

              <div className="navIconWrapper">
                <FaShoppingCart className="navIcon" />
              </div>

              <Button variant="warning">
                <Link className="link" to="/about">
                  با ما تماس بگیرید
                </Link>
              </Button>
              
            </div>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
