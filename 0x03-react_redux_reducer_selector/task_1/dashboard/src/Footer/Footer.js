import year from '../utils/utils';
import React from 'react';
import AppContext from '../App/AppContext';
import {useContext} from 'react'





function Footer() {
        const context = useContext(AppContext);

return (
        <React.Fragment>
                <p>{year} </p>
                {context.user.isLoggedIn ? <p id='logoutSection'><a>Contact Us</a></p> : <p></p>}
        </React.Fragment>
)
}

export default Footer;