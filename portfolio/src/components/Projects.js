import React from "react";
import ReactPlayer from 'react-player'
import './project.css'

const Projects = () => {
    return(
        <div className="work">          
            <div className="card project">
                <h6>Project Name: Bite Bank</h6>
                <h6>Client side: React, Redux, and Thunk</h6>
                <h6>Server side: Ruby on Rails</h6>
                <h6>Live app: https://bite-bank.netlify.app/ </h6>
                <div style={{ width: "auto", height: "20rem" }}>
                <ReactPlayer url='https://youtu.be/mVHMsb0lXLw' 
                width="100%"
                height="100%"
                />
                </div> 
            </div>
            <div className="card project">
                <h6>Project Name: Pair It Up!</h6>
                <h6>Client side: Javascript</h6>
                <h6>Server side: Ruby on Rails</h6>
                <div style={{ width: "auto", height: "20rem" }}>
                <ReactPlayer url='https://youtu.be/M26lT_x6ADs' 
                width="100%"
                height="100%"
                />
                </div> 
            </div>
            <div className="card project">
                project
            </div>
            <div className="card project">
                project
            </div>
        </div>
    )
}

export default Projects