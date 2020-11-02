import React from "react";

//function with return statement : => indicate that there is a return in ()
const ButtonPrimary = ({onClick, children}) => (
    <button className="btn btn-primary button" onClick={onClick}>{children}</button>
);

export default ButtonPrimary;