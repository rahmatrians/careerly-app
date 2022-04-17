import logo from './logo.svg';
import './App.css';
// require('colors');
// const request = require('request');
// const cheerio = require('cheerio');
import * as cheerio from 'cheerio';
import axios from 'axios';
// import express from 'express';
import cors from 'cors';
import React, { useEffect, useState } from 'react';
// import Scrapper from './Scrapper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Register() {

    const [search, setSearch] = useState("");
    const [getData, setGetData] = useState([]);

    useEffect(() => {
    }, [getData])

    const searchingData = () => {
        console.log(search);
        const url = 'http://localhost:8000/results/' + search;

        axios(url)
            .then(response => {
                const html = response.data
                console.log('datanya', html);
                setGetData(html);
            })
    }


    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">
                <div className="card-body">
                    <h2 className="font-sans mx-auto my-5">Register</h2>
                    <label className="label" htmlFor="status">
                        <span className="label-text">Status  Pendidikan</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pilih</option>
                        <option>SMA-Sederajat</option>
                        <option>S1</option>
                    </select>
                    <label className="label" htmlFor="tanggal">
                        <span className="label-text">Tanggal Lahir</span>
                    </label>
                    <input type="text" id="tanggal" placeholder="Ketikkan Tanggal Lahir" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label mt-0" htmlFor="nomor">
                        <span className="label-text">No. Handphone</span>
                    </label>
                    <input type="text" id="nomor" placeholder="Ketikkan No. Handphone" className="input input-bordered w-full max-w-xs"></input>
                    <label className="label" htmlFor="jenkel">
                        <span className="label-text">Jenis Kelamin</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pilih</option>
                        <option>Laki-Laki</option>
                        <option>Perempuan</option>
                    </select>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-64 mx-auto mt-8 my-5">Buat Akun</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;