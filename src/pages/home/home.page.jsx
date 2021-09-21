import React from 'react';
import './style.home.css';
import img0 from '../../public/asserts/hero.JPG';
import img1 from '../../public/asserts/home.jpg';
import img2 from '../../public/asserts/profil.PNG'
// import Slider from 'react-slick';
// import { RightOutlined, LeftOutlined } from "@ant-design/icons";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
            <div className="div-scroll-rigth">
                <button onClick={onClick}  className="btn-scroll-right">
                    {/* <RightOutlined /> */}kk
                </button>
            </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="div-scroll-left">
        <button onClick={onClick}  className="btn-scroll-left">
            {/* <LeftOutlined /> */}
            lll
        </button>
    </div>
    );
  }

export default function Home(){
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slideToshow: 1,
        slideToscroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "div-caroussel"
    }
    const photos = [
        img0, img1, img2,
    ]
    return(
        <div className="home-page content d-block">
            {/* <Slider {...settings}>
                {
                    photos.map(photo =>{
                        return(
                            <div data-aos="fade-up" className="div-img">
                                <img className="slide" src={photo} alt="1"/>
                            </div>
                        );
                    })
                }
            </Slider> */}
            <div className="container-fluid">
                <h2 className="text-upperCase">Nos Options et Sections</h2>
            </div>
        </div>
    )
}