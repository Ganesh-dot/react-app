import React from "react"

class Form extends React.Component {
  render() {
    return (
      <div className="formInput">
        <h1 className="h1">Create a new account</h1>
        <p className="makeItEasy">it's quick and easy</p>
        <div id="myForm" name="vForm">
          <input id="text1" className="nameInput" name="fname" type="text" placeholder="First name" />
          <div id="fnamemsg" className="showmsg"></div>
          <input id="text2" className="nameInput1" name="lname" type="text" placeholder="Last name" />
          <div id="lnamemsg" className="showmsg"></div>
          <input id="text3" className="nameInput2" name="num" type="tel" placeholder="mobile number or Email address" />
          <div id="emailmsg" className="showmsg"></div>
          <input id="text4" className="nameInput3" name="pwd" type="password" placeholder="New password" />
          <div id="passwordmsg" className="showmsg"></div>
        </div>
        <h2 className="bday">Birthday</h2>
        <input id="birth" className="dateinput" type="date" />
        <i id="questionimg" class="material-icons">report</i>
        <div>
          <h3 className="genderinput">Gender</h3>
          <div id="selectgender">
            <input id="male" type="radio" value="male" name="gender" />
            <label className="choosegender" for="male">Male</label>

            <input id="female" type="radio" value="female" name="gender" />
            <label className="choosegender" for="female">Female</label>

            <input id="custom" type="radio" value="custom" name="gender" />
            <label className="choosegender" for="custom">Custom</label>
            <i className="material-icons">report</i>
          </div>
        </div>
        <p className="paragraph">By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update" className="termlink">Terms</a>, <a href="https://www.facebook.com/about/privacy/update" className="datalink">Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/" className="cookielink">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
        <button onClick={this.showList} id="clickbtn" className="btn" value="Sign Up">Sign Up</button>
        <hr className="horizental" />

        <p className="paragraph1"><a href="https://www.facebook.com/pages/create/?ref_type=registration_form" className="page">Create a Page</a> for a celebrity, band or business.</p>
      </div>
    )
  }
};
export default Form;