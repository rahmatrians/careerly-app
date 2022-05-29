import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import supabase from './config/supabase';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import Header from './components/Header';

function SeminarDetail() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const location = useLocation();
  const [getData, setGetData] = useState([]);
  const [url, setUrl] = useState([]);
  const [getResponse, setGetResponse] = useState([]);

  useEffect(() => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

    setGetData(location.state);
    setUrl(location.state.url);
    getDescription(location.state.url);
  }, [])

  const getDescription = (urlLink) => {
    axios.post('http://localhost:8000/seminar-detail', {
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

      <section>
        <div className=" mt-40 mb-20">
          <h1 className="text-center text-2xl font-normal">{getData.title}</h1>
        </div>
      </section>

      <section>
        <div className="flex font-sans">
          <div className="card card-compact w-96 bg-base-100 shadow-xl relative ml-52">
            <img src={getData.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form className="flex-auto p-6 mr-56">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                Harga
              </h1>
              <div className="w-full flex-none text-sm font-semibold text-slate-700 mt-2">
                {getResponse.price}
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4 mt-10">
                {/* <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Tertarik
                </button> */}
                          <div className="">
            <a href={getData.url} target="_blank" className="btn btn-primary font-bold">Tertarik</a>
          </div>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 ml-52">
        {/* <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Deskripsi
        </button>
        <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Materi
        </button>
        <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Waktu
        </button> */}
      <div className="mx-auto my-16">
          {getResponse && (
            <div dangerouslySetInnerHTML={{ __html: getResponse.description }}></div>
          )}
        </div>
        </div>
      </section>

      <section>
        {/* <div>
          <h1 className="text-xl font-normal ml-52 mt-10 mb-8"><strong>Deskripsi</strong></h1>
          <h4 className="text-lg w-8/12 mx-auto mb-16">
            <p>Melalui kelas kami, peserta diharapkan memperoleh pengetahuan praktis yang dapat diaplikasikan dalam pekerjaan,
              serta berkesempatan untuk diskusi interaktif dengan Expert.</p><br></br>
            <p>Visualisasi Data dapat membantu kamu dalam menerjemahkan data menjadi tampilan yang mudah dipahami oleh stakeholder,
              serta memungkinkan kamu mendeteksi pola, tren, dan outlier dalam suatu kelompok data. Salah satu tools populer dalam
              visualisasi data adalah Tableau.</p><br></br>
            <p>Dalam kelas ini bersama M Musyafa Syahbid - Market Researcher dari GOJEK, kamu akan belajar menggunakan Tableau untuk
              membuat visual data yang menarik dan interaktif, demi mencapai pemahaman yang sama dengan para stakeholder dalam mengambil
              keputusan bisnis.</p><br></br>
            <p>TINGKAT KESULITAN WORKSHOP:<br></br>
              Bagi Pemula atau Beginners : <br></br>
              Ditujukan untuk profesional yang ingin meningkatkan skill di bidang tertentu.
              Dalam Level ini, peserta akan dibekali dengan kerangka dasar, panduan end-to-end process, studi kasus, serta best practice
              dari topik terkait.</p>
          </h4>
        </div> */}
      </section>

    </>
  );
}

export default SeminarDetail;