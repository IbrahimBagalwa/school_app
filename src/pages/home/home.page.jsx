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

            <div className="container-fluid div-actuality- d-flex">
                <div className="container">
                    <span>Nos<strong> Options et Sections</strong></span>
                    <p>Nous avons 3 (HTS, CG, HP) options</p>
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title fw-bold">Technique Sociale</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title font-weight">Pedagogie Genarale</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title">Math Physique</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div> 
                       
                    </div>
                </div>
            </div>

            <div className="container-fluid div-actuality">
                <div className="container">
                    <span>Nos <strong>Services</strong></span>
                        <div className="row justify-content-center">
                        
                            <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2 prjtimb">
                                <h6 className="text-danger text-center mt-2">Bibliotheque</h6>
                                <hr/>
                                {/* <Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-book p-1'></i></strong>
                                    <p>Bien apprendre</p>
                                </div>
                                {/* </Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-mesure p-1'></i>Mesures fiscales</strong>
                                    <p>Apprendre a les maitriser</p>
                                </div>
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-budget p-1'></i>Mon budget</strong>
                                    <p>Combien emprunter ?</p>
                                </div>
                            </div>
                            <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2 prjtimb">
                                <h6 className="text-danger text-center mt-2">Laboratoire</h6>
                                <hr/>
                                {/* <Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-book p-1'></i></strong>
                                    <p>Bien apprendre</p>
                                </div>
                                {/* </Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-mesure p-1'></i>Mesures fiscales</strong>
                                    <p>Apprendre a les maitriser</p>
                                </div>
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-budget p-1'></i>Mon budget</strong>
                                    <p>Combien emprunter ?</p>
                                </div>
                            </div>
                            <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2 prjtimb">
                                <h6 className="text-danger text-center mt-2">Comptabilite</h6>
                                <hr/>
                                {/* <Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-book p-1'></i></strong>
                                    <p>Bien apprendre</p>
                                </div>
                                {/* </Link> */}
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-mesure p-1'></i>Mesures fiscales</strong>
                                    <p>Apprendre a les maitriser</p>
                                </div>
                                <div className="ml-3 p-2">
                                    <strong><i className='fa fa-budget p-1'></i>Mon budget</strong>
                                    <p>Combien emprunter ?</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid div-actuality- d-flex">
                <div className="container">
                    <span>Nos<strong> Enseignants</strong></span>
                    <p>Retrouvez le profil de nos enseignants</p>
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title fw-bold">Peter SWEDI</h6>
                                <p className="card-text">Enseignat</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title font-weight">Abraham BAGALWA</h6>
                                <p className="card-text">Enseignant</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img0} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title">Elie MWABULA</h6>
                                <p className="card-text">Enseignant</p>
                            </div>
                        </div> 
                       
                    </div>
                </div>
            </div>

            <div className="div-stat">
                <div className="content">
                    <div className="row justify-content-center">
                        <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2">
                            <div className="ml-3 p-2 text-center">
                                <h1 className='text-white'>5609</h1> <br/>
                                <h1 className='text-white'>ETUDIANTS</h1>
                            </div>
                        </div>
                        <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2">
                            <div className="ml-3 p-2 text-center">
                                <h1 className='text-white'>309</h1> <br/>
                                <h1 className='text-white'>OUVRAGES</h1>
                            </div>
                        </div>
                        <div className=" p-0 col-sm-12 col-md-4 col-lg-3 m-2">
                            <div className="ml-3 p-2 text-center">
                                <h1 className='text-white'>760</h1> <br/>
                                <h1 className='text-white'>DIPLOMES</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}