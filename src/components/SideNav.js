import React, { useEffect, useState } from 'react';
import '../CustomButton.css';
import Graph from '../images/iconly/Graph.svg';
import File from '../images/iconly/File.svg';
import Profile from '../images/iconly/Profile.svg';
import Feedback from '../images/iconly/Feedback.svg';
import { Link } from "react-router-dom";

function SideNav(data) {

    useEffect(() => {
    }, []);

    return (
        <>
            <section className='fixed'>
                <div className="relative card rounded-none h-screen bg-white w-96 drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                    <div className="mx-12">
                        <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Careerly</a>
                        <div className="mt-24">
                            <ul className="menu mx-auto w-full">
                                <li><Link to="/dashboard" className={`rounded-xl ${data.data == 1 && (' active font-bold')}`} > <img src={Graph} /> Ringkasan</Link></li>
                                <li><Link to="/laporan" className={`rounded-xl ${data.data == 2 && (' active font-bold')}`}><img src={File} /> Laporan</Link></li>
                                <li><Link to="/feedback" className={`rounded-xl ${data.data == 4 && (' active font-bold')}`}><img src={Feedback} /> Feedback</Link></li>
                                <li><Link to="/ProfilAdmin" className={`rounded-xl ${data.data == 3 && (' active font-bold')}`}><img src={Profile} /> Profile</Link></li>
                            </ul>
                            <button className="absolute inset-x-12 bottom-10 btn bg-red-500 text-white">Logout</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SideNav;