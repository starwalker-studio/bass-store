import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {

    const widthBass = { width: '20em' };
    const widthBanner = { width: '50em' };
    const font = { fontFamily: "Oswald" };
    const buttonMetronomeLink = {
        borderRadius: '25px',
        width: '30ex'
    };

    return (
        <div className="container mt-5" style={font}>
            <div className="row justify-content-center">
                <div className="text-center mb-3">
                    <NavLink to="/warwick">
                        <img src="img\bass-warwick.png" alt="" style={widthBass} to="/" />
                    </NavLink>
                    <h3 className="mt-3">Warwick</h3>
                </div>
                <div className="text-center mb-3">
                    <NavLink to="/ibanez">
                        <img src="img\bass-ibanez.png" alt="" style={widthBass} />
                    </NavLink>
                    <h3 className="mt-3">Ibañez</h3>
                </div>
                <div className="text-center mb-3">
                    <NavLink to="/epiphone">
                        <img src="img\bass-epiphone.png" alt="" style={widthBass} />
                    </NavLink>
                    <h3 className="mt-3">Epiphone</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="mt-5">
                    <NavLink to="/strings">
                        <img className="img-fluid" src="img\bass-strings-banner.png"
                            alt="" style={widthBanner} />
                    </NavLink>
                </div>
                <div className="mt-5">
                    <img className="img-fluid" src="img\bass-tabs-banner.png"
                        alt="" style={widthBanner} />
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <NavLink type="button"
                    className="btn btn-outline-dark btn-lg"
                    style={buttonMetronomeLink}
                    to="/metronome">Try our metronome</NavLink>
            </div>
        </div>
    )
}

export default Index
