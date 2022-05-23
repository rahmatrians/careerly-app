import React, { useEffect, useState } from 'react';
import '../CustomButton.css';

function Header(data) {

useEffect(() => {
}, []);

  return (
    <>
    <section className="fixed z-50 top-0 left-0 right-0">
    <div className="navbar bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.07)]">
    <div className="container mx-auto">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-bold">Careerly</a>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
            <li><a>Home</a></li>
            <li><a>Kategori</a></li>
            <li><a>Tentang Kami</a></li>
            <li><a> {data.data.isLogin ? 'Hi,'+data.data.fullname : <><button className="btn btn-primary ">Login</button></>}
          </a>
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