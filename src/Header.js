import React from 'react';
import Dropdown from "./Dropdown.js";
import './Dropdown.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div className="fullheader">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <ul className="form">
          <li>
            <i id="cloud" className="material-icons">cloud_download</i>
          </li>
          <li>
            <input className="typeText" type="text" name="" placeholder="Search" />
          </li>
          <li>
            <button className="close">
              <i className="material-icons">search</i>
            </button>
          </li>
        </ul>
        <ul className="inListItem">
          <li className="account">
            <i className="material-icons">account_circle</i>
          </li>
          <li className="text">Ganesh</li>
          <li className="createspace">|</li>
          <li className="text">Home</li>
          <li className="createspace">|</li>
          <li className="text">Create</li>
          <li className="createspace">|</li>
          <li>
            <i className="material-icons">people_alt</i>
          </li>
          <li>
            <i className="material-icons">chat</i>
          </li>
          <li>
            <i className="material-icons">notifications</i>
          </li>
          <li className="createspace">|</li>
          <li>
            <i className="material-icons">contact_support</i>
          </li>
          <li>
            <i onClick={this.updateState} id="clickOn" className="material-icons">arrow_drop_down</i>
          </li>
        </ul>
        {
          this.state.isToggleOn && (
            <Dropdown />
          )
        }

      </div>

    )
  }
};
export default Header;