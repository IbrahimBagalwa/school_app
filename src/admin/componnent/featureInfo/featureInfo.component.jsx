import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import './featureInfo.component.css';

export default function FeatureInfo() {

    return (
        <div className="featured">
           <div className="featuredItem">
               <Link to='/revenues' className="link">
                    <span className="featuredTitle">Nouveau Inscript</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">108</span>
                        <span className="featuredMoneyRate">
                            -11.4 <ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
               </Link>
                    <span className="featuredSub">Compared to last Month</span>
            </div>
                <div className="featuredItem">
                    <Link to='/ventes' className ="link">
                        <span className="featuredTitle">Reussites</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">1022</span>
                            <span className="featuredMoneyRate">
                                -1.4 <ArrowDownward className="featuredIcon negative"/>
                            </span>
                        </div>
                        <span className="featuredSub">Compared to last Month</span>
                    </Link>
                </div>
            <div className="featuredItem">
                <Link to="/ventes" className="link">                
                    <span className="featuredTitle">Eleves</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">5083</span>
                        <span className="featuredMoneyRate">
                            +4.4 <ArrowUpward className="featuredIcon"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last Month</span>
                </Link>
            </div> 
        </div>
    )
}
