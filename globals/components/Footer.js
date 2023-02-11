import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input, Form, TextArea, Image } from "semantic-ui-react";
import '../components/sass/Footer.scss';

const Footer = () =>{
    const location = useLocation();

    const contactRef = React.useRef();
    const scrollToContacts = () =>{
        contactRef.current.scrollIntoView({
            behavior : 'smooth',
        });
    };

    useEffect (() =>{

        const currentPath = location.hash;
        if(currentPath === "#contact"){
            scrollToContacts();
        }
    })
    return(
        <>
        <div className="footer" ref={contactRef}>
            <div className="footerl">
                <div className="footerlogo">
                    <span>
                     <Image src={require('../../assets/images/amphicore-logo.png')} />
                    </span>
                    <p className="footerinfo">
                        A - I - 4.0: AI-Powered Automation
                        in Production, Products, Manufacturing 
                        and Design
                    </p>
                </div>
                <p className="contactinfohead">Contact Info</p>
                <div className="contactinfo">
                    <p> Phone</p>
                    <p>Address</p>
                    <p>Email</p>
                </div>
            </div>
            <div className="footerr">
                <Form>
                    <Input type="text" placeholder="Name"/>
                    <Input type="email" placeholder="Email"/>
                    <Input type="text" placeholder="subject"/>
                    <TextArea placeholder='Message' rows={5}/>
                </Form>
            </div>
        </div>
        <div className="socialicons">
            <div className="social">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
}

export default Footer;