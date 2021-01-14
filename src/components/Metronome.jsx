import React, { useState, useEffect } from 'react';

const Metronome = () => {

    const [seconds, setSeconds] = useState(1);
    const [play, setPlay] = useState(false);
    const [sound] = useState(new Audio());
    const [soundBell] = useState(new Audio());
    const [sliderValue, setSliderValue] = useState(100);

    const buttonMetronome = {
        borderRadius: '25px',
        width: '18ex',
        height: '6ex'
    };

    const buttonBpm = {
        borderRadius: '25px',
        width: '7ex',
        height: '6ex'
    };

    const padding = {
        padding: '5ex'
    };

    const centerText = {
        textAlign: '-webkit-center'
    };

    const slideBarWith = {
        width: '70ex',
        margin: 'auto'
    };

    const result = 60000 / sliderValue;

    const stopMetro = () => {
        setPlay(false);
        setSeconds(1);
    };

    soundBell.src = 'sound/Roland-SC-88-Metronome-Bell.wav';
    sound.src = 'sound/Korg-N1R-Metronome-Click.wav';

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
                sound.play();
            }, result);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play, sound, result]);

    seconds === 5 && setSeconds(1);

    return (
        <div className="cointainer mt-3" style={padding}>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1 className="mt-5" style={centerText}>Metronome 4/4</h1>
                </div>
            </div>
            <div className="row justify-content-md-center mt-3">
                <div className="circle col-md-auto">
                    <div className="circle-two col-md-auto">
                        <h1 className="mt-2" style={centerText}>{seconds}</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center mt-4">
                <div className="col-md-auto" style={centerText}>
                    <table>
                        <thead style={centerText}>
                            <tr>
                                {
                                    seconds === 1 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="brown">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 2 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 3 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 4 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="mt-5">
                <div className="row justify-content-center">
                    <button
                        className="btn btn-outline-info mr-3"
                        onClick={() => setPlay(true)}
                        style={buttonMetronome}>play</button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => stopMetro()}
                        style={buttonMetronome}>stop</button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-auto" style={slideBarWith}>
                        <input type="range" className="form-control-range" min="0" max="200"
                            value={sliderValue} onChange={e => setSliderValue(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="row mt-4" style={centerText}>
                <div className="col-sm"/>
                <div className="col-sm"/>
                <div className="col-sm">
                    <button
                        className="btn btn-secondary"
                        onClick={() => setSliderValue(sliderValue - 1)}
                        style={buttonBpm}><h4>-</h4></button>
                </div>
                <div className="col-sm">
                    <h3 style={centerText}>{sliderValue} BPM</h3>
                </div>
                <div className="col-sm">
                    <button
                        className="btn btn-secondary"
                        onClick={() => setSliderValue(sliderValue + 1)}
                        style={buttonBpm}><h4>+</h4></button>
                </div>
                <div className="col-sm"/>
                <div className="col-sm"/>
            </div>
        </div>
    )
}

export default Metronome
