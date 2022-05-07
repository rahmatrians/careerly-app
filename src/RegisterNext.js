import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import supabase from './config/supabase';


function RegisterNext() {
    const navigate = useNavigate();
    const location = useLocation();
    const [getData, setGetData] = useState([]);
    const [pendidikan, setPendidikan] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [noHandphone, setNoHandphone] = useState("");
    const [kelamin, setKelamin] = useState("");

    useEffect(() => {
        console.log(location.state);
        setGetData(location.state);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        saving();
    }

    const saving = async () => {
        const { data, error } = await supabase
        .from('user')
        .insert([
            {
                fullname: getData.fullname,
                email: getData.email,
                password: getData.password,
                education_status: pendidikan,
                birthdate: tanggalLahir,
                phone_number: noHandphone,
                city_residence: getData.kota,
                gender: kelamin,
                role_id: '5c918aeb-3814-4bff-9aa3-5f29edc92afe',
            }
        ])

        if (error) {
            console.log('error:', error.message);
        } else {
            console.log('suksesss');
            navigate('/profil');
            // navigate('/profil', { state: {fullname:fullname, kota:kota, email:email, password:password} });
        }
    }



    return (
        <>
        <form onSubmit={e => handleSubmit(e)}>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">
                <div className="card-body">
                    <h2 className="font-sans mx-auto my-5">Register</h2>
                    <label className="label" htmlFor="status">
                        <span className="label-text">Status  Pendidikan</span>
                    </label>
                    <select value={pendidikan} onChange={e => setPendidikan(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option value={""}>Pilih</option>
                        <option value={"sd"}>SD</option>
                        <option value={"smp"}>SMP</option>
                        <option value={"sma"}>SMA-Sederajat</option>
                        <option value={"s1"}>S1</option>
                    </select>
                    <label className="label" htmlFor="tanggal">
                        <span className="label-text">Tanggal Lahir</span>
                    </label>
                    <input value={tanggalLahir} onChange={e => setTanggalLahir(e.target.value)} type="date" id="tanggal" placeholder="Ketikkan Tanggal Lahir" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label mt-0" htmlFor="nomor">
                        <span className="label-text">No. Handphone</span>
                    </label>
                    <input value={noHandphone} onChange={e => setNoHandphone(e.target.value)} type="number" id="nomor" placeholder="Ketikkan No. Handphone" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label" htmlFor="jenkel">
                        <span className="label-text">Jenis Kelamin</span>
                    </label>
                    <select value={kelamin} onChange={e => setKelamin(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option value={""}>Pilih</option>
                        <option value={"pria"}>Pria</option>
                        <option value={"wanita"}>Wanita</option>
                    </select>
                    <div className="card-actions justify-end">
                    <input type="submit" value="Submit" className="btn btn-primary w-64 mx-auto mt-8 my-5" />
                        {/* <button type="submit" className="btn btn-primary w-64 mx-auto mt-8 my-5">Buat Akun</button> */}
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default RegisterNext;