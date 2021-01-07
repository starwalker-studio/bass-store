import React from 'react';

const Index = () => {

    const widthBass = { width: '20em' };
    const font = { fontFamily: "Oswald" };

    return (
        <div className="container" style={font}>
            <div className="row justify-content-center">
                <div className="text-center">
                    <img src="img\bass-warwick.png" alt="" style={widthBass}/>
                    <h3 className="mt-3">Warwick</h3>
                </div>
                <div className="text-center">
                    <img src="img\bass-ibanez.png" alt="" style={widthBass}/>
                    <h3 className="mt-3">Ibañez</h3>
                </div>
                <div className="text-center">
                    <img src="img\bass-epiphone.png" alt="" style={widthBass}/>
                    <h3 className="mt-3">Epiphone</h3>
                </div>
                {/* <div className="text-center">
                    <img src="img\bass-fender.png" alt="" style={widthBass}/>
                    <h3 className="mt-3">Fender</h3>
                </div> */}
            </div>
        </div>
    )
}

export default Index
