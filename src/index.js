import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Login from './Login';
import Course from './Course';
import CourseDetail from './CourseDetail';
<<<<<<< HEAD
import SeminarDetail from './SeminarDetail';
import DetailBootcamp from './DetailBootcamp';
import DetailMagang from './DetailMagang';
=======
import SettingUser from './SettingUser'
>>>>>>> 48da6f3a7d40e3330c47e023219b5387482ca93c
import reportWebVitals from './reportWebVitals';

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
<<<<<<< HEAD
        <Route path="SeminarDetail" element={<SeminarDetail />} />
        <Route path="DetailBootcamp" element={<DetailBootcamp />} />
        <Route path="DetailMagang" element={<DetailMagang />} />
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
    </Routes>
  </BrowserRouter>
=======
        <Route path="settinguser" element={<SettingUser />} />
        {/* <Route path=":teamId" element={<Team />} /> */}
        {/* <Route index element={<LeagueStandings />} /> */}
      </Routes>
    </BrowserRouter>
>>>>>>> 48da6f3a7d40e3330c47e023219b5387482ca93c
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
