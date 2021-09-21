import React from 'react';
import './style.home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img0 from '../../public/asserts/hero.JPG';
import img1 from '../../public/asserts/home.jpg';
import img2 from '../../public/asserts/profil.PNG'
import { RightOutlined, LeftOutlined } from "@ant-design/icons";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
            <div className="div-scroll-rigth">
                <button onClick={onClick}  className="btn-scroll-right">
                    <RightOutlined />
                </button>
            </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="div-scroll-left">
        <button onClick={onClick}  className="btn-scroll-left">
            <LeftOutlined />
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
        <div className="home">
            {/* <Slider {...settings}>
                {
                    photos.map(photo =>{
                        return(
                            <div data-aos="fade-up-" className="div-img-">
                                <img className="slide-" src={photo} alt="1"/>
                            </div>
                        );
                    })
                }
            </Slider> */}
            <div className="container-fluid div-actuality py-2 d-flex">
                <div className="container">
                    <span>Nos<strong> Options et Sections</strong></span>
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title">Technique Sociale</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div> 
                       
                    </div>
                </div>
            </div>
        </div>
    )
}