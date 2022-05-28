import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function DetailWorkshop() {
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

      <section>
        <div className=" mt-40 mb-20">
          <h1 className="text-center text-2xl font-normal">Learn Python: The Complete Python Programming Course</h1>
        </div>
      </section>

      <section>
        <div className="flex font-sans">
          <div className="card card-compact w-96 bg-base-100 shadow-xl relative ml-52">
            <img src={require('./images/python.png')} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form className="flex-auto p-6 mr-56">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                Harga
              </h1>
              <div className="w-full flex-none text-sm font-semibold text-slate-700 mt-2">
                Rp. 129.000
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4 mt-10">
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Tertarik
                </button>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 ml-52">
          <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
            Tentang
          </button>
          <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
            Materi
          </button>
          <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
            Tools
          </button>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-xl font-normal ml-52 mt-10 mb-8"><strong>Deskripsi</strong></h1>
          <h4 className="text-lg w-8/12 mx-auto mb-16">
            <p>Apakah Anda ingin menjadi seorang pemrogram? Apakah Anda ingin mempelajari cara membuat game,
              mengotomatiskan browser, memvisualisasikan data, dan banyak lagi?</p><br></br>
            <p>Jika Anda ingin belajar Python untuk pertama kalinya atau ingin mempelajari lebih lanjut, ini 
              adalah kursus untuk Anda!</p><br></br>
            <p>Python dengan cepat menjadi salah satu bahasa pemrograman paling populer di seluruh dunia. 
              Dibandingkan dengan bahasa lain seperti Java atau C++, Python secara konsisten mengungguli dan 
              mengungguli bahasa-bahasa ini dalam permintaan dari bisnis dan ketersediaan pekerjaan. Pengembang 
              Python rata-rata menghasilkan lebih dari $100.000 - jumlah ini hanya akan bertambah di tahun-tahun mendatang.</p><br></br>
            <p>Bagian terbaik? Python adalah salah satu bahasa pengkodean termudah untuk dipelajari saat ini. 
              Tidak masalah jika Anda tidak memiliki pengalaman pemrograman atau tidak terbiasa dengan sintaks Python. 
              Pada saat Anda menyelesaikan kursus ini, Anda akan menjadi pro mutlak dalam pemrograman!<br></br></p>
          </h4>
        </div>
      </section>

    </>
  );
}

export default DetailWorkshop;