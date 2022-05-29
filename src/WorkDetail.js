import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import supabase from './config/supabase';
import axios from 'axios';

import Header from './components/Header';

function WorkDetail() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const location = useLocation();
  const [getData, setGetData] = useState([]);
  const [url, setUrl] = useState([]);
  const [getResponse, setGetResponse] = useState([]);

  useEffect(async () => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

    await setGetData(location.state);
    setUrl(location.state.detail);
    getDescription(location.state.detail);
  }, [])

  const getDescription = (urlLink) => {
    let url ;
    if (location.state.source == 'linkedin') {
      url = 'http://localhost:8000/linkedin-detail';
    } else if (location.state.source == 'lokerid') {
      url = 'http://localhost:8000/lokerid-detail';
    }

    axios.post(url, {
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

<Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

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
            <div dangerouslySetInnerHTML={{ __html: getResponse.description }}></div>
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