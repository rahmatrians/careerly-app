import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Login from './Login';
import Course from './Course';
import CourseDetail from './CourseDetail';

import UbahProfil from './UbahProfil';
import SeminarDetail from './SeminarDetail';
import DetailBootcamp from './DetailBootcamp';
import DetailMagang from './DetailMagang';
import reportWebVitals from './reportWebVitals';
import Seminar from './Seminar';
import Work from './Work';
import Wishlist from './Wishlist';
import Dashboard from './Dashboard';
import Register from './Register';
import SettingUser from './SettingUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Course /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="course" element={<Course />} />
        <Route path="detail" element={<CourseDetail />} />
        <Route path="seminar" element={<Seminar />} />
        <Route path="work" element={<Work />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ubahprofil" element={<UbahProfil />} />
        <Route path="register" element={<Register />} />
        <Route path="SeminarDetail" element={<SeminarDetail />} />
        <Route path="DetailBootcamp" element={<DetailBootcamp />} />
        <Route path="DetailMagang" element={<DetailMagang />} />
        <Route path="settinguser" element={<SettingUser />} />
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
