import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img  src={require("C:/Users/Admin/Desktop/Full Stack/MEME/meme/src/trollface.png")} className = "header-image" alt="Error"/>
            <h2 className="header-head">Meme Generator</h2>
        </header>
    )
}