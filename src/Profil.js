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

function Profil() {

  return (
    <>
      <div className="Container text-black">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20 bg-white">
          <div className="card-body">
            <h2 className="card-title mx-auto">Tambah Foto Profil</h2>
            <div className="avatar">
              <div className="w-20 rounded-full mx-auto mt-6">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-md mx-auto px-16 mb-20">Upload Photo</button>
        </div>
      </div>
      <div className="Container-button flex justify-center">
        <div className="">
          <button className="btn btn-primary btn-md  w-44 my-4 ">Selesai</button><br></br>
          <button className="btn bg-slate-200 btn-md w-44 ">Skip</button>
        </div>
      </div>
    </>
  );
}

export default Profil;