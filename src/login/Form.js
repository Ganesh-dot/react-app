import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      fnameError: "",
      lName: "",
      lnameError: "",
      email: "",
      emailError: ""
    }
    this.fnameVerify = this.fnameVerify.bind(this);
    this.lnameVerify = this.lnameVerify.bind(this);
    this.emailVerify = this.emailVerify.bind(this);
    this.fnameHandler = this.fnameHandler.bind(this);
    this.lnameHandler = this.lnameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.fError = this.fError.bind(this);
    this.lError = this.lError.bind(this);
    this.eError = this.eError.bind(this);
  }
  fError = (event) => {
    this.setState({ fnameError: event.target.value })
  }
  lError = (event) => {
    this.setState({ lnameError: event.target.value })
  }
  eError = (event) => {
    this.setState({ emailError: event.target.value })
  }
  fnameHandler = (event) => {
    this.setState({ fName: event.target.value })
  }
  lnameHandler = (event) => {
    this.setState({ lName: event.target.value })
  }
  emailHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  fnameVerify = event => {
    let fnameError = " ";
    if (this.state.fName || this.state.fName < 3) {
      fnameError = "Name is Empty";
      return false;
    } else {
      this.fnameError = "Valid Name";
      return true;
    }
  }
  lnameVerify = () => {
    let lnameError = " ";
    if (this.state.lName || this.state.lName < 3) {
      lnameError = "Enter last name";
      return false;
    } else {
      this.lnameError = "Valid Last Name";
      return true;
    }
  }
  emailVerify = () => {
    let emailError = " ";
    if (this.state.email.includes("@")) {
      emailError = "Invalid Email";
      return false;
    } else {
      this.emailError = "Valid Email";
      return true;
    }
  }

  render() {
    return (
      <form className="formInput">
        <h1 className="h1">Create a new Account</h1>
        <p className="makeItEasy">it's quick and easy</p>
        <div id="myForm" name="vForm">
          <input id="text1"
            onChange={this.fnameHandler}
            onBlur={e => this.fnameVerify(e)}
            value={this.state.fName}
            className="nameInput"
            name="fName"
            type="text"
            placeholder="First name" />
          <p style={{ color: "red", fontSize: 12 }}>{this.state.fnameError}</p>
          <input
            id="text2"
            onChange={this.lnameHandler}
            onBlur={() => this.lnameVerify}
            value={this.state.lName}
            className="nameInput1"
            name="lName"
            type="text"
            placeholder="Last name" />
          <p style={{ color: "red", fontSize: 12 }}>{this.state.lnameError}</p>
          <input
            id="text3"
            onChange={this.emailHandler}
            onBlur={() => this.emailVerify}
            value={this.state.email}
            className="nameInput2"
            name="num"
            type="tel"
            placeholder="mobile number or Email address" />
          <p style={{ color: "red", fontSize: 12 }}>{this.state.emailError}</p>
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