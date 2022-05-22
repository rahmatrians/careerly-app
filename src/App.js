import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import supabase from './config/supabase';


import './index.css';
import Home from './Home';
import Login from './Login';
import Course from './Course';
import CourseDetail from './CourseDetail';
import UbahProfil from './UbahProfil';
import SeminarDetail from './SeminarDetail';
import DetailBootcamp from './DetailBootcamp';
import DetailMagang from './DetailMagang';
import Seminar from './Seminar';
import Profil from './Profil';
import Work from './Work';
import Wishlist from './Wishlist';
import Dashboard from './Dashboard';
import Register from './Register';
import RegisterNext from './RegisterNext';
import SettingUser from './SettingUser';
import WorkDetail from './WorkDetail';


// function AuthRoute() {
//   const navigate = useNavigate();
//   const storeItem = useSelector(state => state);

//   console.log('ayoalh');
//   useEffect(() => {
//     const session = supabase.auth.session();
//     console.log((session.access_token != null && storeItem.token == session.access_token) ? 'masih aktif' : 'expired cuk');
//     (session.access_token != null && storeItem.token == session.access_token) ? navigate('/') : navigate('login');
//     // storeItem.token != session ? navigate('login');
//     // storeItem.token != sess && navigate('/login');
//   },[])

    
//   return(<></>)

// }

function Routing() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);

  console.log('ayoalh');
  useEffect(() => {
      const session = supabase.auth.session();
      console.log((isEmpty(session.access_token) && storeItem.token == session.access_token) ? 'masih aktif' : 'expired cuk');
      console.log(storeItem);
      storeItem.token != session.access_token  &&  navigate('login');
  
  //   window.onunload = () => {
  //     localStorage.clear();
  //  }
    // checkSession();
    // window.onbeforeunload = function() {
      // localStorage.clear();
      // alert("Hello! I am an alert box!!");
    },[])

const handleTabClosing = () => {
          alert("Hello! I am an alert box!!");
          console.log('xsett');
}

// const alertUser = () => {
//         localStorage.clear();
// }

  // const checkSession = async () => {
  //   const session = supabase.auth.session()
  //   console.log('sess', session);
  //   if (session) {
  //     setAccToken(session.access_token)
  //   }
  // }

  
  return(
    <Routes>
          {/* {(storeItem.isLogin || storeItem.token != null) ? */}
        <Route index element={<Home />} />
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
        {/* <Route path=":teamId" element={<Team />} /> */}
        {/* <Route index element={<LeagueStandings />} /> */}
        <Route index path="login" element={<Login />}></Route>
        </Routes>
  )
}


function App() {

  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
  );
}

export default App;