import React, { useEffect, useState } from 'react';
import '../CustomButton.css';
import { Link } from "react-router-dom";

function Header(data) {

useEffect(() => {
}, []);

  return (
    <>
    <section className="fixed z-50 top-0 left-0 right-0">
    <div className="navbar bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.07)]">
    <div className="container mx-auto">
        <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Careerly</Link>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
            <li><a href='/'>Home</a></li>
            <li><a href='/#category'>Kategori</a></li>
            <li><a href='/#about'>Tentang Kami</a></li>
            <li>{data.data.isLogin ? <><Link to="/settinguser" className="text-blue-700">Hi, {data.data.fullname}</Link></> : <><Link to="/login" className="btn btn-primary text-white">Login</Link></>}
            
          </li>
        </ul>
        </div>
    </div>
    </div> {/* end of top bar */}
    </section>
    </>
  );
}

export default Header;