import React from 'react';
import './Navbar.component.css';
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { Popover } from 'antd';
import SideBar from '../siderBar/siderBar';


export default function NavAdmin({children}) {
   
    return (
        <div className="page">
            <div className="Navbar">
                <div className="navbar-wrapper">
                    <div className="navLeft">
                        <span className="logo">Ndahura-Hight School</span>
                    </div>
                    <div className="navRight">
                        <div className="navbarIconsContainer">
                            <NotificationsNone/>
                            <span className="iconBag">3</span>
                        </div>
                        <div className="navbarIconsContainer">
                            <Language/>
                            <span className="iconBag">2</span>
                        </div>
                        <div className="navbarIconsContainer">
                            <Settings/>
                        </div>
                        {/* <Popover placement='bottomRight' content={content} title={ <h2> {data.fsname} {data.lsname} </h2> } trigger="click"> */}
                        {/* <Avatar children={<img src={`https://ms-backapp.herokuapp.com/resource/${data.avatar}`} alt={data.fsname} className="avatar"/>} /> */}
                            {/* <Avatar alt={data.fsname} children={<CloudImg className="avatar" publicId={data.avatar} />} /> */}
                        {/* </Popover> */}
                    </div>
                </div>
                <SideBar />
            </div>
            <div className="page-body">
                {children}
            </div>
        </div>
    )
}
