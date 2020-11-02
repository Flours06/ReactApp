import React from "react";
import {IconPath} from "./IconPath";


export const IconSort = ({state}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{width: '1rem', height:'1rem', marginLeft :'2px', color :'grey'}} viewBox="0 0 24 24" stroke="currentColor">
        <IconPath state={state}/>
    </svg>
);

export default IconSort;