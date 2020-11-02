import React from "react";

// Icon for asc, desc in order
export const IconPath = ({state}) => {
    if(state === 'asc') {
        return (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        )
    }
    if (state ==='desc') {
        return (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18"/>

        )
    }
    return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    )
};

