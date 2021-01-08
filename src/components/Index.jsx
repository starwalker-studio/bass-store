import React, { useState, useEffect } from 'react';

const Index = () => {

    const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);

    const widthBass = { width: '20em' };
    const widthBanner = { width: '50em' };
    const font = { fontFamily: "Oswald" };

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play]);

    return (
        <div className="container mt-5" style={font}>
            <div className="row justify-content-center">
                <div className="text-center mb-3">
                    <img src="img\bass-warwick.png" alt="" style={widthBass} />
                    <h3 className="mt-3">Warwick</h3>
                </div>
                <div className="text-center mb-3">
                    <img src="img\bass-ibanez.png" alt="" style={widthBass} />
                    <h3 className="mt-3">Ibañez</h3>
                </div>
                <div className="text-center mb-3">
                    <img src="img\bass-epiphone.png" alt="" style={widthBass} />
                    <h3 className="mt-3">Epiphone</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="mt-5">
                    <img className="img-fluid" src="img\bass-strings-banner.png"
                        alt="" style={widthBanner} />
                </div>
                <div className="mt-5">
                    <img className="img-fluid" src="img\bass-tabs-banner.png"
                        alt="" style={widthBanner} />
                </div>
            </div>
            <button onClick={() => setPlay(true)}>play</button>
            <button onClick={() => setPlay(false)}>pause</button>
            <button onClick={() => setSeconds(0)}>reset</button>
            <h2>{seconds}</h2>
        </div>
    )
}

export default Index
