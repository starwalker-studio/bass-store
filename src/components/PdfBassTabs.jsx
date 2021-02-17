import React, { useState, useEffect } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import '../styles/basstabs-style.css';


const PdfBassTabs = () => {
    const [seconds, setSeconds] = useState(1);
    const [play, setPlay] = useState(false);
    const [click] = useState(new Audio());
    const [sliderValue, setSliderValue] = useState(100);

    const result = 60000 / sliderValue;

    const stopMetro = () => {
        setPlay(false);
        setSeconds(1);
    };

    click.src = 'sound/Korg-N1R-Metronome-Click.wav';

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
                click.play();
            }, result);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play, click, result]);

    seconds === 5 && setSeconds(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    
    return (
        <div>
            <div className="text-center">
                <div className="d-flex flex-row sticky-top justify-content-center backgroundModeltitle">
                    <div className="row mt-2 mb-2">
                        <h2 className="mr-3"><strong>Metronome : {seconds}</strong></h2>
                        <button type="button"
                            onClick={() => setSliderValue(sliderValue - 1)}
                            className="btn btn-light buttonBpmTbs mr-3"><strong>-</strong></button>
                        <h2>{sliderValue} BPM</h2>
                        <button type="button"
                            onClick={() => setSliderValue(sliderValue + 1)}
                            className="btn btn-light buttonBpmTbs ml-3 mr-3"><strong>+</strong></button>
                        {
                            !play ? (
                                <button className="btn btn-success buttonMetronomeTabs mr-3"
                                    type="button"
                                    onClick={() => setPlay(true)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                    </svg></button>

                            ) : (
                                    <button className="btn btn-danger buttonMetronome mr-3"
                                        type="button"
                                        onClick={() => stopMetro()}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
                                      </svg></button>
                                )
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <Document
                            file="https://arxiv.org/pdf/quant-ph/0410100.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <button className="btn btn-black"
                        onClick={() => setPageNumber(pageNumber + 1)}>next</button>
                    <p>Page {pageNumber} of {numPages}</p>
                </div>
            </div>

        </div>
    )
}

export default PdfBassTabs
