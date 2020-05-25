import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};

    if (!fields["name"] || !fields["name"] > 3) {
      errors["name"] = "Please Enter Valid Name";
    } else {
      errors["name"] = "Valid name";
    }
    this.setState({ errors: errors });
  }
  handleLastName() {
    let fields = this.state.fields;
    let errors = {};

    if (!fields["lname"] || !fields["lname"] > 3) {
      errors["lname"] = "Please Enter Valid lastName";
    } else {
      errors["lname"] = "Valid Last Name";
    }
    this.setState({ errors: errors });
  }
  handleEmail() {
    let fields = this.state.fields;
    let errors = {};

    if (!fields["email"]) {
      errors["email"] = "Invalid Email or mobile";
    } else {
      errors["email"] = "Valid Email or Number";
    }
    this.setState({ errors: errors });
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <form className="formInput">
        <h1 className="h1">Create a new Account</h1>
        <p className="makeItEasy">it's quick and easy</p>
        <div id="myForm" name="vForm">
          <input id="text1"
            onBlur={this.handleValidation.bind(this, "name")}
            onChange={this.handleChange.bind(this, "name")}
            value={this.state.fields["name"]}
            className="nameInput"
            name="fname"
            type="text"
            placeholder="First name" />
          <p style={{ color: "red" }}>{this.state.errors["name"]}</p>
          <input
            id="text2"
            onBlur={this.handleLastName.bind(this, "lname")}
            onChange={this.handleChange.bind(this, "lname")}
            value={this.state.fields["lname"]}
            className="nameInput1"
            name="lname"
            type="text"
            placeholder="Last name" />
          <p style={{ color: "red" }}>{this.state.errors["lname"]}</p>
          <input
            onBlur={this.handleEmail.bind(this, "email")}
            onChange={this.handleChange.bind(this, "email")}
            value={this.state.fields["email"]}
            id="text3"
            className="nameInput2"
            name="num"
            type="tel"
            placeholder="mobile number or Email address" />
          <p style={{ color: "red" }}>{this.state.errors["email"]}</p>
          <input
            id="text4"
            className="nameInput3"
            name="pwd"
            type="password"
            placeholder="New password" />
          <p></p>
        </div>
        <h2 className="bday">Birthday</h2>
        <input id="birth" className="dateinput" type="date" />
        <i id="questionimg" className="material-icons">report</i>
        <div>
          <h3 className="genderinput">Gender</h3>
          <div id="selectgender">
            <input id="male" type="radio" value="male" name="gender" />
            <label className="choosegender" htmlFor="male">Male</label>

            <input id="female" type="radio" value="female" name="gender" />
            <label className="choosegender" htmlFor="female">Female</label>

            <input id="custom" type="radio" value="custom" name="gender" />
            <label className="choosegender" htmlFor="custom">Custom</label>
            <i className="material-icons">report</i>
          </div>
        </div>
        <p className="paragraph">By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update" className="termlink">Terms</a>, <a href="https://www.facebook.com/about/privacy/update" className="datalink">Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/" className="cookielink">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
        <button type="submit" id="clickbtn" className="btn" value="Sign Up">Sign Up</button>
        <hr className="horizental" />

        <p className="paragraph1"><a href="https://www.facebook.com/pages/create/?ref_type=registration_form" className="page">Create a Page</a> for a celebrity, band or business.</p>
      </form>
    )
  }
};
export default Form;