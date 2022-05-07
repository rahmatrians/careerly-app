import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';

import { useLocation } from "react-router-dom";
import axios from 'axios';

function WorkDetail() {
  const location = useLocation();
  const [getData, setGetData] = useState([]);
  const [url, setUrl] = useState([]);
  const [getResponse, setGetResponse] = useState([]);

  useEffect(() => {
    setGetData(location.state);
    setUrl(location.state.detail);
    getDescription(location.state.detail);
  }, [])

  const getDescription = (urlLink) => {
    axios.post('http://localhost:8000/jobseeker-detail', {
      data: JSON.stringify(urlLink)
    })
      .then((response) => {
        setGetResponse(response.data[0]);
      }, (error) => {
        console.log(error);
      });
  }



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
                <li><a><button className="btn btn-primary ">Login</button></a></li>
              </ul>
            </div>
          </div>
        </div> {/* end of top bar */}
      </section>



      <section className='w-8/12  mx-auto'>
        <div className="grid grid-cols-5 mt-40 mb-28">
          <div className="col-span-3 text-[#3F427B]">
            <figure className="inline-block"><img src={getData.logo} className="bg-red-800" alt="Shoes" /></figure>
            <div className="inline-block ml-10">
              <h3 className="text-2xl font-bold ">{getData.job}</h3>
              <h3>Perusahaan : {getData.company}</h3>
              <h3>Tipe Pekerjaan : {getResponse.jobType}</h3>
              <h3>Lokasi : {getData.location}</h3>
            </div>
          </div>
          <div className="">
            <a href={getData.detail} target="_blank" className="btn btn-primary font-bold">Tertarik</a>
          </div>
        </div>



        <div className="mx-auto mb-16">
          {getResponse && (
            <div dangerouslySetInnerHTML={{ __html: getResponse.title }}></div>
          )}
        </div>

        {/* <div className="">
          <h4 className="font-bold w-8/12 mx-auto  ml-52">Skill Wajib</h4>
          <div className="mt-4 ml-52">
            <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
              ProgreSQL
            </button>
            <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
              Figma
            </button>
            <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
              Laravel
            </button>
            <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
              PHP
            </button>
          </div>
        </div> */}
      </section>

      {/* <section>
        <h4 className="font-bold w-8/12 mx-auto mt-6 ml-52">Tunjangan dan Keuntungan</h4>
        <div className="">
        </div>
      </section>

      <div className="card w-8/12 bg-white shadow-xl ml-52 my-10 ">
        <div className="card-body">
          <h4 className="font-bold w-8/12  mb-2">
            Tentang Perusahaan<br></br>
          </h4>

          <div className="grid grid-cols-5 gap-x-4 my-2">
            <figure><img src={require('./images/magang.png')} alt="Shoes" /></figure>
            <div className=" text-[#3F427B]">
              <h3 className="text-lg font-bold">Web Developer</h3>
              <h1 className="text-sm">Information Technology and Services</h1>
            </div>

          </div>

          <p className="font-normal w-full ">
            Metranet merupakan anak usaha Telkom Indonesia yang berdiri sejak tahun 2009 dan memiliki visi
            untuk mengakselerasi dan menumbuhkan inovasi digital untuk menjadi produk yang bermanfaat bagi
            masyarakat.[Scale-up Management]
          </p>
          <h4 className="font-bold w-8/12 mt-4 mb-2">
            Alamat Kantor<br></br>
          </h4>
          <p className="font-normal w-full mb-6">
            Mulia Business Park Gedung J, Jl. M.T. Haryono Kav. 58-60, RT.2/RW.2, Pancoran, Kec. Pancoran,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780
          </p>
        </div>
      </div> */}


    </>
  );
}

export default WorkDetail;