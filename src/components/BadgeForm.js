import React from "react";

class BadgeForm extends React.Component {
  //Inicializamos el estado de nuestro componente
  /* state = {
    jobTitle: "ServiceNow Developer", asi podriamos inicializar el estado o valor de este campo en el formulario
  }; */
  /*  handleChange = (e) => { */
  /*     console.log({
      name: e.target.name,
      value: e.target.value,
    }); */
  /*  this.setState({
      [e.target.name]: e.target.value,
    });
  }; */

  handleClick = (e) => {
    console.log("The button was clicked");
  };

  /*  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state); //Imprimimos todo el estado
  }; */
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName} //Cuando ponemos value pasamos a controlar la informacion guardada.
              required
            />
          </div>

          <div className="form-group ">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              required
            />
          </div>

          <div className="form-group">
            <label>email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              required
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              required
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
