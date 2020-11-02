import React from "react";
import ButtonPrimary from "./Button";

//HEader get the function fetchUsers that we create in App()
const Header = ({onFetchClick, onFetchClickAdd}) => (
    <div>
        <h1>React app 2</h1>
        <ButtonPrimary onClick={onFetchClick}>Fetch users</ButtonPrimary>
        <ButtonPrimary onClick={onFetchClickAdd}>More users</ButtonPrimary>
        <hr/>
    </div>
);

export default Header;