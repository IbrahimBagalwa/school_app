import React from 'react';
import './style.home.css';
import Hero from './hero';


export default function Home(){
    return(
        <div className="">
            <Hero />
            <div className="container-fluid pb-2">
                <h2 className="font-weight-bold text-white text-upperCase pb-2">Nos Options & Sections</h2>
            </div>
        </div>
    )
}