import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../pages/styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    /* const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */
    this.setState({
      /* form: nextForm, */
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState = { loading: true, error: null };
    try {
      await api.badges.create(this.state.form);
      this.setState = { loading: false };
    } catch (error) {
      this.setState = { loading: false, error: error };
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email || "email"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
