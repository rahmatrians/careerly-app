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
      <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"></input>
      <button onClick={() => searchingData()} className="btn btn-active btn-primary">Button</button>

      {getData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((val, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{val.title}</td>
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