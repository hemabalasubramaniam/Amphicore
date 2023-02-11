import React from "react";
import './sass/Team.scss';

const Team = () =>{
    return(
        <>
        <div className="team">
            <p className="teamhead">Team</p>
            <div className="teammembers">
                <div>
                    <div className="profile"></div>
                    <p>Name</p>
                    <p>Destination</p>
                </div>
                <div>
                    <div className="profile"></div>
                    <p>Name</p>
                    <p>Destination</p>
                </div>
                <div>
                    <div className="profile"></div>
                    <p>Name</p>
                    <p>Destination</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Team;