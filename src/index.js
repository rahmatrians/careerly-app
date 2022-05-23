import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Seminar from './Seminar';
import Profil from './Profil';
import Work from './Work';
import Wishlist from './Wishlist';
import Dashboard from './Dashboard';
import Register from './Register';
import RegisterNext from './RegisterNext';
import SettingUser from './SettingUser';
import WorkDetail from './WorkDetail';
<<<<<<< HEAD
import ProfilAdmin from './ProfilAdmin';
import UbahProfilAdmin from './UbahProfilAdmin';
=======
import Laporan from './Laporan';
>>>>>>> f506806174d8d6711b5fad6d12eb2b3761a224dd
import { BrowserRouter, Routes, Route } from "react-router-dom";

=======
import store from './redux/store';
import { Provider as StoreProvider } from 'react-redux';
>>>>>>> 8d0a08d297b37070d881e3d523b85fa26d20f504

import App from './App';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
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
        <Route path="profil" element={<Profil />} />
        <Route path="RegisterNext" element={<RegisterNext />} />
        <Route path="SeminarDetail" element={<SeminarDetail />} />
        <Route path="DetailBootcamp" element={<DetailBootcamp />} />
        <Route path="DetailMagang" element={<DetailMagang />} />
        <Route path="settinguser" element={<SettingUser />} />
        <Route path="workDetail" element={<WorkDetail />} />
<<<<<<< HEAD
        <Route path="ProfilAdmin" element={<ProfilAdmin />} />
        <Route path="UbahProfilAdmin" element={<UbahProfilAdmin />} />
=======
        <Route path="Laporan" element={<Laporan />} />
>>>>>>> f506806174d8d6711b5fad6d12eb2b3761a224dd
        {/* <Route path=":teamId" element={<Team />} /> */}
        {/* <Route index element={<LeagueStandings />} /> */}
      </Routes>
    </BrowserRouter>
=======
        <StoreProvider store={store}>
      <App/>
        </StoreProvider>
>>>>>>> 8d0a08d297b37070d881e3d523b85fa26d20f504
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
