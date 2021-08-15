import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Instagram,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/CustomButton";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="./About" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* Experiences*/}
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/Experiences"
            className={
              pathName === "./Experiences"
                ? "header_link_active"
                : "header_link"
            }
          >
            Experiences
          </Nav.Link>
          {/* Portfolio */}
          <Nav.Link
            as={NavLink}
            to="./Portfolio"
            className={
              pathName === "./Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          {/*Blog*/}
          <Nav.Link
            as={NavLink}
            to="./Blog"
            className={
              pathName === "./Blog" ? "header_link_active" : "header_link"
            }
          >
            Blog
          </Nav.Link>
          {/* Contact*/}
          <Nav.Link
            as={NavLink}
            to="./Contact"
            className={
              pathName === "./Contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div class="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}{" "}
            </a>
          ))}
          <CustomButton text={"Hire me"} icon={<Telegram />}></CustomButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default withRouter(Header);
