import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Register() {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState([]);
    const [kota, setKota] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/registernext', { state: {fullname:fullname, kota:kota, email:email, password:password} });
    }

    useEffect(() => {
    }, [])


    return (
        <>
         <form onSubmit={e => { handleSubmit(e) }}>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">
                <div className="card-body">
                    <h2 className="font-sans mx-auto my-5">Register</h2>
                    <label className="label" htmlFor="status">
                        <span className="label-text">Nama Lengkap</span>
                    </label>
                    <input type="text" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Ketikkan Nama Lengkap" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label" htmlFor="tanggal">
                        <span className="label-text">Kota Tinggal</span>
                    </label>
                    <input type="text" value={kota} onChange={e => setKota(e.target.value)} placeholder="Ketikkan Kota Tinggal" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label mt-0" htmlFor="nomor">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ketikkan Email" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label" htmlFor="jenkel">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ketikkan Password" className="input input-bordered w-full max-w-xs"></input>
                    <div className="card-actions justify-end">
                        {/* <Link to="/SeminarDetail" state={val} className="link  btn btn-primary w-full self-end font-bold no-underline">Lanjutkan</Link> */}
                        <button type="submit" className="btn btn-primary w-64 mx-auto mt-8 my-5">Lanjutkan</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default Register;