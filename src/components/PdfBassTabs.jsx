import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBassTabs } from '../redux/bassTabsDucks';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '../components/Navbar';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../styles/basstabs-style.css';
import korg from '../sound/Korg-N1R-Metronome-Click.wav';

const PdfBassTabs = () => {

    window.scrollTo(0, 0);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => { setNumPages(numPages); }

    const [seconds, setSeconds] = useState(1);
    const [play, setPlay] = useState(false);
    const [click] = useState(new Audio());
    const [sliderValue, setSliderValue] = useState(100);
    const [catalog, setCatalog] = useState(true);
    const [cart, setCart] = useState([]);

    const dispatch = useDispatch();

    const pdf = useSelector(store => store.tabs.pdf);
    const loading = useSelector(store => store.tabs.loading);

    const files = [
        { band: 'Alien Ant Farm', file: 'Alien Ant Farm - Smooth Criminal Bass.pdf' },
        { band: 'Audioslave', file: 'Audioslave - Be Yourself Bass.pdf' },
        { band: 'Bush', file: 'Bush - Come Down Bass.pdf' },
        { band: 'Killswitch Engage', file: 'Killswitch Engage - Life To Lifeless Bass.pdf' },
        { band: 'Korn', file: 'Korn - Freak On A Leash Bass.pdf' },
        { band: 'Metallica', file: 'Metallica - Sad But True Bass.pdf' },
        { band: 'Motley Crue', file: 'Motley Crue - Girls Girls Girls Bass.pdf' },
        { band: 'Pantera', file: 'Pantera - Cowboys From Hell Bass.pdf' },
        { band: 'Pearl Jam', file: 'Pearl Jam - Do The Evolution Bass.pdf' },
        { band: 'Rage Against The Machine', file: 'Rage Against The Machine - Killing In The Name Bass.pdf' },
        { band: 'Rammstein', file: 'Rammstein - Du Hast Bass.pdf' },
    ]

    const result = 60000 / sliderValue;

    const stopMetro = () => {
        setPlay(false);
        setSeconds(1);
    };

    click.src = korg;

    useEffect(() => {
        localStorage.getItem('cart') && (setCart([...JSON.parse(localStorage.getItem('cart'))]));
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

    const getPdf = (file) => {
        dispatch(getBassTabs(file));
        setCatalog(false);
    };

    const returnBassTabs = () => {
        setNumPages(null);
        setPageNumber(1);
        setCatalog(true);
    };

    return (
        <div>
            <Navbar cart={cart} />
            <div>
                <div className="text-center">
                    <div className="d-flex flex-row sticky-top justify-content-center backgroundModeltitle">
                        <div className="row mt-2 mb-2">
                            <h2 className="mr-3"><strong>Metronome : {seconds}</strong></h2>
                            <button type="button"
                                onClick={() => setSliderValue(sliderValue - 1)}
                                className="btn btn-dark buttonBpmTbs mr-3"><strong>-</strong></button>
                            <h2>{sliderValue} BPM</h2>
                            <button type="button"
                                onClick={() => setSliderValue(sliderValue + 1)}
                                className="btn btn-dark buttonBpmTbs ml-3 mr-3"><strong>+</strong></button>
                            {
                                !play ? (
                                    <button className="btn btn-success buttonMetronomeTabs mr-3"
                                        type="button"
                                        onClick={() => setPlay(true)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg></button>

                                ) : (
                                        <button className="btn btn-danger buttonMetronomeTabs mr-3"
                                            type="button"
                                            onClick={() => stopMetro()}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                                            </svg></button>
                                    )
                            }
                        </div>
                    </div>
                    <div className="container">
                        {
                            catalog ? (
                                <div>
                                    <div className="row justify-content-center">
                                        <ul className="list-group list-group-flush text-left">
                                            <li className="list-group-item text-center"><h1>Bass Tabs</h1></li>
                                            {
                                                files.map(item => (
                                                    <li key={item.band}
                                                        className="list-group-item">
                                                        <button className="btn btn-info mr-3"
                                                            onClick={() => getPdf(item.file)}>View <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                                                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                                            </svg></button>
                                                        <strong>{item.file}</strong>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <hr />
                                    <NavLink to="/bass-store">
                                        <button className="btn btn-dark buttonReturnCatalog mt-5 mb-5"
                                            onClick={() => returnBassTabs()}>Return to Home</button>
                                    </NavLink>
                                </div>
                            ) : (
                                    !loading ? (
                                        <div className="mb-5">
                                            <div className="d-flex justify-content-center">
                                                <Document
                                                    file={pdf}
                                                    onLoadSuccess={onDocumentLoadSuccess}
                                                >
                                                    <Page pageNumber={pageNumber} />
                                                </Document>
                                            </div>
                                            <p>Page {pageNumber} of {numPages}</p>
                                            <div className="row justify-content-center mb-3">
                                                {
                                                    pageNumber !== 1 && (
                                                        <button className="btn btn-secondary mr-5 buttonMetronomeTabs"
                                                            onClick={() => setPageNumber(pageNumber - 1)}
                                                        >back</button>
                                                    )
                                                }
                                                {
                                                    pageNumber !== numPages && (
                                                        <button className="btn btn-secondary buttonMetronomeTabs"
                                                            onClick={() => setPageNumber(pageNumber + 1)}
                                                        >next</button>
                                                    )
                                                }
                                            </div>
                                            <button className="btn btn-info mt-5 mb-5 buttonReturnCatalog"
                                                onClick={() => returnBassTabs()}>Return to Bass Tabs</button>
                                        </div>
                                    ) : (
                                            <div className="spinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                        )
                                )
                        }
                    </div >
                </div >
            </div >
        </div>
    )
};

export default PdfBassTabs;
