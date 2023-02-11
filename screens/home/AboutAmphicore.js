import React from "react";
import { Image } from "semantic-ui-react";
import './sass/AboutAmphicore.scss';

const AboutAmphicore = () =>{
    return(
        <>
        <div className="corelogo">
            <Image src={require('../../assets/images/amphicore.png')} />
        </div>
        <div className="aboutcontent">
            <div className="img">
                <Image src={require('../../assets/images/core-engine.png')} />
            </div>
            <div className="content">
                <p >
                Amphicore is a subsidiary of Amphiventures. Amphicore's AI Engines are powered by researchers and experts who have deep knowledge in Machine Learning, Data Science, Image and Video Analytics, Decision Making Systems and AI-powered Application Development. 
                Amphicore inherits the strong software engine development experiences from Amphisoft which holds the largest software engines built for Education, Agriculture, HR Transformations and Medicine. 
                Amphicore comprises a team who have excelled in the design and manufacturing of machines in all domains of engineering. The conclave of the engineering team and software engine teams of Amphicore have evolved brilliant automation models and designs for i4. 0.
                </p>
            </div>
        </div>
        </>
    );
}

export default AboutAmphicore;