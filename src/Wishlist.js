import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import supabase from './config/supabase';

function Wishlist() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);
  
  useEffect(() => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

    searchingData();
  }, [getData])



  const searchingData = async () => {
    console.log(search);
    const url = 'https://careerly-service.herokuapp.com/results/mobile';

    axios(url)
      .then(response => {
        const html = response.data
        console.log('datanya', html);
        setGetData(html);
      })
  }
  


 return(
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
                <li><a><button className="btn btn-primary ">Login</button></a></li>
              </ul>
            </div>
          </div>
        </div> {/* end of top bar */}
      </section>

      <section>
        <div className=" mt-40 container mx-auto">
        <h1 className="text-3xl font-bold">Wishlist</h1>
        </div>
      </section>

      <section>
      <div className="container mx-auto mt-16">
      <div className="tabs w-full">
  <a className="tab tab-bordered pb-10 px-24 tab-active">Online Course / Bootcamp</a> 
  <a className="tab tab-bordered pb-10 px-24">Seminar / Workshop</a> 
  <a className="tab tab-bordered pb-10 px-24">Lowongan Kerja / Magang</a>
</div>
</div>
      </section>


      <section>
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

                  {getData.map((val, idx) => (
                  <div key={idx} className=" card bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                    <div className="grid justify-items-start">
                      <figure className="px-10 pt-10  mx-auto">
                        <img src={'https://buildwithangga.com'+val.image} alt="Shoes" className="rounded-xl max-h-[150px]" />
                      </figure>
                    </div>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-[#3F427B]">{val.title}</h2>
                      <p className="text-lg text-[#3F427B]">{val.harga}</p>
                      <div className="card-actions flex mt-12">
                      <Link to="/detail" state={val.url} className="link  btn btn-primary w-full self-end font-bold no-underline">
                      Lihat
                      {/* <button className="btn btn-primary w-full self-end font-bold" onClick={() => detailPage()}>Lihat</button> */}
                        </Link>
                      </div>
                      </div>
                    </div>
                    ))}
                
                </div>
          </div>

      </section>
     
    </>
 );
}

export default Wishlist;