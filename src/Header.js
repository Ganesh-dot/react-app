import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div class="fullheader">	       	
            <ul class="form"> 
            <li> <i id="cloud" class="material-icons">cloud_download</i> </li>
            <li> <input class="typeText" type="text" name="" placeholder="Search" /> </li>
            <li> <button class="close"><i class="material-icons">search</i></button>  </li>        
            </ul>   	  

  </div>
    );
}

export default Header;