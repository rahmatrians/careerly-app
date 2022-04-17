import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Detail() {
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
          <h1 className="text-center text-2xl font-normal">[Data & Analytics Workshop] Visualize Your Data using Tableau</h1>
        </div>
      </section>

      <section>
        <div class="flex font-sans">
          <div class="card card-compact w-96 bg-base-100 shadow-xl relative ml-52">
            <img src={require('./images/Detailseminar.png')} alt="" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form class="flex-auto p-6 mr-56">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                Harga
              </h1>
              <div class="w-full flex-none text-sm font-semibold text-slate-700 mt-2">
                Rp. 500.000
              </div>
            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4 mt-10">
                <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Tertarik
                </button>
              </div>
              <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div class="mt-6 ml-52">
        <button class="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Deskripsi
        </button>
        <button class="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Materi
        </button>
        <button class="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
          Waktu
        </button>
        </div>
      </section>

      <section>
        <div>
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
        </div>
      </section>







    </>
  );
}

export default Detail;