import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../components/Navbar';

import '../styles/index-style.css';

const Index = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {localStorage.getItem('cart') && (setCart([...JSON.parse(localStorage.getItem('cart'))]));},[]);

    const bassStrings = { img: '', title: '', info: '', price: 0 };

    return (
        <div>
            <Navbar cart={cart}/>
            <div className="container mt-5 font-oswald" >
                <div className="row justify-content-center">
                    <div className="text-center mb-3">
                        <NavLink to="/warwick">
                            <img src="img\bass-warwick.png" alt="" className="widthBass" />
                        </NavLink>
                        <h3 className="mt-3">Warwick</h3>
                    </div>
                    <div className="text-center mb-3">
                        <NavLink to="/ibanez">
                            <img src="img\bass-ibanez.png" alt="" className="widthBass" />
                        </NavLink>
                        <h3 className="mt-3">Ibañez</h3>
                    </div>
                    <div className="text-center mb-3">
                        <NavLink to="/epiphone">
                            <img src="img\bass-epiphone.png" alt="" className="widthBass" />
                        </NavLink>
                        <h3 className="mt-3">Epiphone</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mt-5">
                        <NavLink to={{ pathname: "/strings", state: { view: false, stringbass: bassStrings } }}>
                            <img className="img-fluid widthBanner" src="img\bass-strings-banner.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="mt-5">
                        <NavLink to="/basstabs">
                            <img className="img-fluid widthBanner" src="img\bass-tabs-banner.png" alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <NavLink type="button"
                        className="btn btn-outline-dark btn-lg buttonMetronomeLink"
                        to="/metronome">Try our metronome</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Index
