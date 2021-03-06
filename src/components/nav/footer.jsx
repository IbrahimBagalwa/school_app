import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <footer className="" id="footer">
            <div className="container">
                <div className="row py-4 justify-content-center">
                    <div className="col-lg-4">
                        <h4 className="text-white text-uppercase pb-2">l'entreprise</h4>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-light">Qui sommes nous ?</Link></li>
                            <li><Link to="/contact" className="text-light">Nous contacter</Link></li>
                            <li><Link to="#" className="text-light">Nous recrutons</Link></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-white text-uppercase pb-2">Nos Services</h4>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-white">Bibliotheque</Link></li>
                            <li><Link to="#" className="text-white">Laboratoire</Link></li>
                            <li><Link to="#" className="text-white">comptabilite</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-white text-uppercase pb-2">Nos Options</h4>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-white">Technique Sociale</Link></li>
                            <li><Link to="#" className="text-white">Commerciale Gestion</Link></li>
                            <li><Link to="#" className="text-white">Mathematique Physique</Link></li>
                            <li><Link to="#" className="text-white">Pedagogie Generale</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-2 bg-light">
                <div class="mr-lg-auto text-center">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Ndahura Hight School</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <Link to="https://github.com/IbrahimBagalwa">Peter Swedi</Link>
                    </div>
                </div>
                <div class="social-links text-center pt-3">
                    <Link to="#" className="twitter"><i className="fa fa-twitter p-2 text-dark "></i></Link>
                    <Link to="#" className="facebook"><i className="fa fa-facebook p-2 text-dark"></i></Link>
                    <Link to="#" className="instagram"><i className="fa fa-instagram p-2 text-dark"></i></Link>
                    <Link to="#" className="google-plus"><i className="fa fa-skype p-2 text-dark"></i></Link>
                    <Link to="#" className="linkedin"><i className="fa fa-linkedin p-2 text-dark"></i></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

    
         
