import React, { useState, useEffect } from 'react';

const Metronome = () => {

    const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);
    const sound = new Audio();
    sound.src = 'sound/Korg-N1R-Metronome-Click.wav';
    

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
                sound.play();
                if (seconds === 4) {
                    setSeconds(1);
                }
            }, 650); 
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play, seconds]);


    return (
        <div className="cointainer mt-5">
            <div className="row justify-content-center">
                <h1 className="mt-5">Metronomo</h1>
            </div>
            <div className="row justify-content-center">
                <button onClick={() => setPlay(true)}>play</button>
                <button onClick={() => setPlay(false)}>pause</button>
                <button onClick={() => setSeconds(0)} className="mr-5">reset</button>
                <h2>{seconds}</h2>
            </div>

        </div>
    )
}

export default Metronome
