import React from 'react';
import './style.home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img0 from '../../public/asserts/hero.jpg';
import img1 from '../../public/asserts/home.jpeg';
import img2 from '../../public/asserts/profil.jpg';
import img3 from '../../public/asserts/im2.jpg';
import tf1 from '../../public/asserts/im3.jpg';
import tf2 from '../../public/asserts/im4.jpg';
import tf3 from '../../public/asserts/om3.jpg';
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
        autoplaySpeed: 5000,
        slideToshow: 1,
        slideToscroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "div-caroussel"
    }
    const setg = {
        dots: false,
        infinite: true,
        autoplaySpeed: 500,
        slideToshow: 3,
        slideToscroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "div-caroussel"
    }
    const photos = [
        img0, img1, img2,img3
    ]
    return(
        <div className="home">
            <Slider {...settings}>
                {
                    photos.map(photo =>{
                        return(
                            <div data-aos="fade-up" className="div-img">
                                <img className="slide" src={photo} alt="1"/>
                            </div>
                        );
                    })
                }
            </Slider>

            <div className=" d-flex">
                <div className="container-fluid mt-2">
                    <span>Nos<strong> Options et Sections</strong></span>
                    <p>Nous avons 3 (HTS, CG, HP) options</p>
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={tf1} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h4 className="card-title font-weight-bold py-2">Technique Sociale</h4>
                                <p className="card-text">Former des futures assistants social capable d'analyse et d'interpreter les faits et phenomenes....</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={tf2} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h4 className="card-title font-weight-bold py-2">Pedagogie Genarale</h4>
                                <p className="card-text">Former de futures enseignants capable de transmetre leur connaissances acquises.....</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={tf3} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title">Math Physique</h6>
                                <p className="card-text">Le choix de cette option se justifie par le souci de former des eleves capables de mener une reflexion scientifique en eff....</p>
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
                                    <strong><i className='fa fa-book p-1'></i>Lecture</strong>
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
                       {/* <Slider {...setg}> */}
                            <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                                <img src={tf3} className="card-img-top" alt="investir"/>
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
                                <img src={img3} className="card-img-top" alt="investir"/>
                                <div className="body-card">
                                    <h6 className="card-title">Elie MWABULA</h6>
                                    <p className="card-text">Enseignant</p>
                                </div>
                            </div> 
                       {/* </Slider> */}
                       
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

            <div className="container-fluid div-actuality- d-flex">
                <div className="container">
                    <span>Nos<strong> Dernieres publications</strong></span>
                    <p>Retrouvez ci-dessous nos dernières publications</p>
                    <div className="row justify-content-center">
                       
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={tf3} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title fw-bold">COMMUNIQUE DE LA RENTRE SCOLAIRE</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={img2} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title font-weight">PUBLICATION DE RESULTAT</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-4 m-3 mt-4 p-2 arbzr">
                            <img src={tf2} className="card-img-top" alt="investir"/>
                            <div className="body-card">
                                <h6 className="card-title">RECRUTEMENT DE NOUVEAU ENSEIGNANT</h6>
                                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus</p>
                            </div>
                        </div> 
                       
                    </div>
                </div>
            </div>
            <div className="container">
                <span>Nos<strong> Partenaires</strong></span>
            </div>
        </div>
    )
}