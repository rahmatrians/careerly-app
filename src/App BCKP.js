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

  useEffect(() => {
    // axios.get('https://www.theguardian.com/uk')
    //   .then(res => {
    //     const persons = res.data;
    //     const yaya = cheerio.load(persons);
    //     console.log(yaya);;
    //   })

    const url = 'https://careerly-service.herokuapp.com/results/web';


    axios(url)
      .then(response => {
        const html = response.data
        // const yaa = cheerio.load(html)
        console.log(html);

        // $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
        //     const title = $(this).text()
        //     const url = $(this).find('a').attr('href')
        //     articles.push({
        //         title,
        //         url
        //     })
        // })
        // console.log('data', yaa);
        // res.json(articles)
      }).catch(err => console.log('error cuk', err))
  }, [])

  const searchingData = () => {
    console.log(search);
    const url = 'https://careerly-service.herokuapp.com/results/' + search;

    axios(url)
      .then(response => {
        const html = response.data
        // const yaa = cheerio.load(html)
        console.log('datanya', html);
      })
  }


  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"></input>
      <button onClick={() => searchingData()} className="btn btn-active btn-primary">Button</button>
    </>
  );
}

export default App;