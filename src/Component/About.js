import {BrowserRouter as Router, Link} from "react-router-dom";
import React from "react";

// More informations for a user
const About = ({user}) => {
    return (
            <div>
                <img src={user.bigPicture} alt="photo"/>
                <p>Address : {user.CP} {user.city}</p>
                <p>Birthday Date : {user.birthday}</p>
            </div>
    );
};

export default About;