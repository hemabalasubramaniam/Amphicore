import React from "react";
import {Button} from 'semantic-ui-react';
import './sass/Portfolio.scss';

const Portfolio = () =>{
    return(
        <div className="portfolio">

            <div className="portfolioheader">
                <div className="t1">
                    <p className="portfoliotext">Our Portfolio</p>
                </div>
                <div className="t2">
                    <Button>Read More</Button>
                </div>
            </div>
            
            <div className="portfolioimg">
                <div>
                   <p>Design</p>
                </div>
                <div> 
                    <p>Manufacturing</p>
                </div>
                <div>
                    <p>Production</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;