import React, { useState, useEffect } from 'react';

const Metronome = () => {

    const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);
    const [sound] = useState(new Audio());
    const [soundBell] = useState(new Audio());
    const [sliderValue, setSliderValue] = useState(100);

    const result = 60000 / sliderValue;

    soundBell.src = 'sound/Roland-SC-88-Metronome-Bell.wav';
    sound.src = 'sound/Korg-N1R-Metronome-Click.wav';

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
                sound.play();
                console.log('rendering metro');
            }, result);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play, sound, result]);

    seconds === 5 && setSeconds(1);

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
                <input type="range" className="custom-range" id="customRange1" min="0" max="300" 
                value={sliderValue} onChange={e => setSliderValue(e.target.value)}></input>
                <h2>{sliderValue}</h2>
            </div>

        </div>
    )
}

export default Metronome
