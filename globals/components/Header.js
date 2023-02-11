import React, {useEffect} from "react";
import { Image, Segment, Header, Menu } from 'semantic-ui-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {content} from '../Headercontent.js';
import '../components/sass/Header.scss';

const Headers = () =>{

  const location= useLocation();

  const navigate = useNavigate();

  const handleNavigate = (currenturl) => {
      return navigate(`/${currenturl}`);
  }

  useEffect(() => {
      window.scrollTo(0, 0);
  })

   
    return(
        <div className="header">
            <Segment clearing>
                <Header floated='right'>
                    <p>Contact:81234 56789</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Header>
                <Header floated='left'>
                    <Image src={require('../../assets/images/amphicore-logo.png')} />
                </Header>
            </Segment>

            <div className="headerbottom-background">
            </div>
            <div className="header-bottom">
                {
                    content.map((x) =>{
                        return <Menu secondary>
                          <Menu.Item
                              name="Home"
                              onClick={() => handleNavigate("")}
                          />
                          <Menu.Item
                              name="About US"
                              onClick={() => handleNavigate('#aboutus')}
                              className={(location.pathname=="/aboutus") ? "headeractive" : null}
                          />
                          <Menu.Item
                              name="Services"
                              onClick={() => handleNavigate('#service')}
                          />
                          <Menu.Item
                              name="Portfolio"
                              onClick={() => handleNavigate('#portfolio')}
                          />
                          <Menu.Item
                              name="Products"
                              onClick={() => handleNavigate('')}
                          />
                          <Menu.Item
                              name="Why Us"
                              onClick={() => handleNavigate('#whyus')}
                          />
                          <Menu.Item
                              name="Contact"
                              onClick={() => handleNavigate('#contact')}
                          />
                        </Menu>
                    })
                }
            </div>
        </div>
    );
}

export default Headers;