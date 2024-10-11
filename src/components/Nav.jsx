import React from "react";

function Nav({link, prop}){
    return (
        <>
        <a href={link}>{prop}</a>
        </>
    )
}

export default Nav;