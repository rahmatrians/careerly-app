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

function App() {

  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);

  useEffect(() => {
  }, [getData])

  const searchingData = () => {
    console.log(search);
    // const url = 'http://localhost:8000/results/' + search;
    const url = 'http://localhost:8000/jobseeker/' + search;

    axios(url)
      .then(response => {
        const html = response.data
        console.log('datanya', html);
        setGetData(html);
      })
  }


  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"></input>
      <button onClick={() => searchingData()} className="btn btn-active btn-primary">Button</button>

      {getData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Logo</th>
                <th>Job</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((val, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td><img src={val.logo} alt="" srcset="" /></td>
                  <td>{val.job}</td>
                  <td>{val.company}</td>
                  <td>{val.location}</td>
                  <td><a href={val.detail}><button onClick={() => searchingData()} className="btn btn-active btn-primary">Tertarik</button></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;