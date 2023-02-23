import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='px-3 px-md-5'>
            <nav className="navbar navbar-expand-lg mt-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h2 className='fw-bold'>T&A</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto col-5"></div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-md-4">
                                <a className="nav-link py-2 p-md-0 active" aria-current="page" href="#">WELCOME</a>
                            </li>
                            <li className="nav-item px-md-4">
                                <a className="nav-link py-2 p-md-0" href="#">OUR STORY</a>
                            </li>
                            <li className="nav-item px-md-4">
                                <a className="nav-link py-2 p-md-0" href="#">TIMELINE</a>
                            </li>
                            <li className="nav-item px-md-4 py-0">
                                <a className="nav-link py-2 p-md-0" href="#">VENUE</a>
                            </li>
                            <li className="nav-item px-md-4 py-0">
                                <a className="nav-link py-2 p-md-0" href="#">WHAT TO THINK</a>
                            </li>
                            <li className="nav-item last px-md-4">
                                <a className="nav-link py-2 p-md-0" href="#">DRESSS CODE</a>
                            </li>
                            <li className="nav-item last px-md-4">
                                <a className="nav-link py-2 p-md-0" href="#"><iconify-icon icon="material-symbols:share-outline"></iconify-icon></a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="col-auto">
                                <button className='btn primary-btn px-3'>RSVP NOW</button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <hr/>
        </div>
    )
}
