import React from 'react'

class Dropdown extends React.Component {
  render() {
    return (
      <div>
        <ol id="listitem" className="arrowList">
          <li className="item1">Your group</li>
          <hr className="listhr" />
          <li className="item2">Advertising on facebook</li>
          <hr className="listhr" />
          <li className="item3">Active log</li>
          <li className="item3">News feed Preferences</li>
          <li className="item3">Setting</li>
          <hr className="listhr" />
          <li className="item4">Switch to New Facebook</li>
          <hr className="listhr" />
          <li className="item5">Log out</li>
        </ol>
      </div>
    )
  }
};
export default Dropdown;