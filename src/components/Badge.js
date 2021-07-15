import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component  {
  render() {
    return(
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon" alt="Avatar"/>
          <h1>Francisco <br/>Lopez</h1>
        </div>
        <div>
          <p>Front End Developer</p>
          <p>@babasyop</p>
        </div>
        <div>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;