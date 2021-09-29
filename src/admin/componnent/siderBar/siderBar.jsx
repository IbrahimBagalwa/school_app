import React from 'react';
import './sideBar.component.css';
import { AttachMoney, BarChart, ChatBubbleOutline, DeleteOutline, DynamicFeed, LineStyle, MailOutline, PeopleOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function SideBar() {
    // const {data} = useSelector(({users: {currentUser}})=>currentUser)
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home   
                            </li>
                        </Link>
                        <Link to='#' className= "link"> 
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Revenue   
                            </li>
                        </Link>
                        <Link to='/ventes' className="link">
                        <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon"/>
                                Transactions   
                            </li> 
                        </Link>
                        {/* <Link to="/transactions" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon"/>
                                Transactions   
                            </li>   
                        </Link> */}
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Agents   
                            </li>
                        </Link>
                        <Link to="/clients" className="link">
                            <li className="sidebarListItem">
                                <PeopleOutline className="sidebarIcon"/>
                                Clients  
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon"/>
                                Carts  
                            </li>
                        </Link>
                        <Link to='#' className="link">
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon"/>
                                Rapport  
                            </li>   
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Corbeille</h3>
                    <ul className="sidebarList">
                        <Link to='/trash' className="link">
                            <li className="sidebarListItem">
                                    <DeleteOutline className="sidebarIcon"/>
                                    Corbeille   
                                </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
