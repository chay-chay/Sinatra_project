import React from "react";
import "./about.css"
import {avatar} from "./images/Avatar.png"

const About = () => {
    return(
        <div id="about">
            <h1 style={{ padding: 20, textAlign: "center" }}>About</h1>
            <p>Full stack software developer originally from Thailand with a passion to learn new technologies. Experienced in JavaScript and Ruby-based programming with a background in International Business Management. Strong problem-solving and organizational skills useful in any multidisciplinary setting. Effective in a team atmosphere with thoughtful attention to communication.</p>
            <img src={avatar} alt="avatar" />
        </div>
    )
}

export default About