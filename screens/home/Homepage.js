import React, {useEffect} from 'react';
import '../home/sass/Home.scss';
import { Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';
import Portfolio from '../home/Portfolio.js';
import Team from '../home/Team.js';
import Testimonials from '../home/Testimonials.js';
import Whyus from '../home/Whyus.js';

const Homepage = () =>{
    const location = useLocation();
    
    const aboutref= React.useRef();
    const scrollToAbout = () => {
        aboutref.current.scrollIntoView({
          behavior: 'smooth',
        });
    };


    const serviceref = React.useRef();
    const scrollToService = () => {
        serviceref.current.scrollIntoView({
          behavior: 'smooth',
        });
    };

    const portfolioref = React.useRef();
    const scrollToPortfolio = () => {
        portfolioref.current.scrollIntoView({
          behavior: 'smooth',
        });
      };

    const productsref = React.useRef();
    const scrollToProducts = () => {
        productsref.current.scrollIntoView({
          behavior: 'smooth',
        });
      };

    const whyusref = React.useRef();
    const scrollToWhyus = () => {
        whyusref.current.scrollIntoView({
          behavior: 'smooth',
        });
      };


    console.log("location", location);

    useEffect(() => {
        const currentPath = location.hash;

        if (currentPath === '#aboutus') {
            scrollToAbout();
        }
        else if(currentPath === "#service"){
            scrollToService();
        }
        else if (currentPath === '#portfolio') {
            scrollToPortfolio();
        } else if (currentPath === '#products') {
            scrollToProducts();
        } else if (currentPath === '#whyus'){
            scrollToWhyus();
        } 
    })

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:1000
      };

    return(
        <>
         <div className="landingpageimg">
                <Slider {...settings}>
                    <Image src={require('../../assets/images/landingimg.png')} />
                    <Image src={require('../../assets/images/landingimg.png')} />
                    <Image src={require('../../assets/images/landingimg.png')} />
                    <Image src={require('../../assets/images/landingimg.png')} />
                    <Image src={require('../../assets/images/landingimg.png')} />
                </Slider>
        </div>
        <div className="aboutus" ref={aboutref} >
            <p className="abouthead">About Us</p>
            <p className='abouttext'>Amphicore is a subsidiary of Amphiventures. Amphicore's AI Engines are powered by researchers and experts who have deep knowledge in Machine Learning, Data Science, Image and Video Analytics, Decision Making Systems and AI-powered Application Development.</p>
            <Link to='/aboutus'>
                <Button >Read More</Button>
            </Link>
        </div>

        <div className="service" ref={serviceref}>
            <p className="servicehead">Our Services</p>
            <p className="servicetext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <div className="checkbtn">
                <Button >Check services</Button>
            </div>
            <div className="servicediv">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div ref={portfolioref}>
            <Portfolio/>
        </div>
        <div ref={whyusref}>
            <Whyus />
        </div>
        <Team />
        <Testimonials />

        </>
    );
}

export default Homepage;