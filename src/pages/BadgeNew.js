import React from "react";
import NavBar from "../components/NavBar";
import Badge from "../components/Badge";
import "../pages/styles/BadgeNew.css";
import header from "../images/badge-header.svg";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Sebastian"
                lastName="Lopez"
                twitter="babasyop"
                jobTitle="Front End Developer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
