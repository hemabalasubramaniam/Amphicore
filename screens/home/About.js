import React from 'react'; 
import './sass/About.scss';
import {Image} from 'semantic-ui-react';

const About = () =>{
    return(
        <>
        <div className='aboutpage'>
        <Image src={require('../../assets/images/aboutpage.png')} />
            <div className='aboutdesc'>
                <p className='abouthead'>About Us</p>
                <p >Amphicore is a subsidiary of Amphiventures. Amphicore's AI Engines are powered by researchers and experts who have deep knowledge in Machine Learning, Data Science, Image and Video Analytics, Decision Making Systems and AI-powered Application Development. 
                    Amphicore inherits the strong software engine development experiences from Amphisoft which holds the largest software engines built for Education, Agriculture, HR Transformations and Medicine.
                    Amphicore comprises a team who have excelled in the design and manufacturing of machines in all domains of engineering. The conclave of the engineering team and software engine teams of Amphicore have evolved brilliant automation models and designs for i4. 0.</p>
            </div>
        </div>
        
        <div className='aboutimg'>
            <div className='core-engine'>
                <Image src={require('../../assets/images/core-engine.png')} />
            </div>
            <div className='core-electric'>
                <Image src={require('../../assets/images/core-electric.png')} />
            </div>
        </div>
        </>
    );
}

export default About;