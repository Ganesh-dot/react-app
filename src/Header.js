import React from 'react';


class Header extends React.Component {
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
                        <i id="clickOn" className="material-icons">arrow_drop_down</i>
                    </li>
                </ul>
            </div>
        )
    }
};
export default Header;