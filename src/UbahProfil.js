import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function UbahProfil() {
  let nav = useNavigate();
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);

  useEffect(() => {
  }, [getData])


  const detailPage = async (data) => {
    console.log('detail cui', data);
    // fetch("http://localhost:8000/detail", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'}, 
    //   body: JSON.stringify(data)
    // }).then(res => {
    //   console.log("Request complete! response:", res);
    // });

    await axios.post('http://localhost:8000/detail', {
      data: data
    })
      .then((response) => {
        console.log(response.data);
        nav({ pathname: `/detail`, state: data });
      }, (error) => {
        console.log(error);
      });

  }


  const searchingData = () => {
    console.log(search);
    // const url = 'http://localhost:8000/results/' + search;
    const url = 'http://localhost:8000/jobseeker/' + search;

    axios(url)
      .then(response => {
        const html = response.data
        console.log('datanya', html);
        setGetData(html);
      })
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
                <li><a>Blog</a></li>
                <li><a>Tentang Kami</a></li>
                <li><a>Hi, Ardi!
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                  </div>
                </a> </li>
              </ul>
            </div>
          </div>
        </div> {/* end of top bar */}
      </section>
      <section>
        <h2 className="font-inter font-bold text-2xl mx-60 mt-32">Ubah Profil</h2>
        <div className="grid gap-0 grid-cols-2">
          <div className="form-control mx-60 mt-5">
            <label className="label" htmlFor="upload">
              <span className="label-text">File Upload</span>
            </label>
            <label className="input-group">
              <input type="text" id="upload" placeholder="Choose a File" className="input input-bordered w-full max-w-xs" />
              <span>Pilih</span>
            </label>
          </div>
          <div class="form-control mt-5 ml-0">
            <label className="label" htmlFor="nama">
              <span className="label-text">Nama Lengkap</span>
            </label>
            <input type="text" id="nama" placeholder="Ketikkan Nama Lengkap" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control mx-60">
            <label className="label" htmlFor="domisili">
              <span className="label-text">Domisili</span>
            </label>
            <input type="text" id="domisili" placeholder="Ketikkan Domisili" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control ml-0">
            <label className="label" htmlFor="status">
              <span className="label-text">Status Pendidikan</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Pilih</option>
              <option>SMA-Sederajat</option>
              <option>S1</option>
            </select>
          </div>
          <div className="form-control mx-60">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input type="text" id="email" placeholder="Ketikkan Email" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control ml-0">
            <label className="label" htmlFor="tanggal">
              <span className="label-text">Tanggal Lahir</span>
            </label>
            <input type="text" id="tanggal" placeholder="Ketikkan Tanggal Lahir" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control mx-60">
            <label className="label" htmlFor="jenkel">
              <span className="label-text">Jenis Kelamin</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Pilih</option>
              <option>Laki-Laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div className="form-control ml-0">
            <label className="label" htmlFor="nomor">
              <span className="label-text">No. Handphone</span>
            </label>
            <input type="text" id="nomor" placeholder="Ketikkan No. Handphone" className="input input-bordered w-full max-w-xs" />
          </div>
        </div>
        <button className="btn btn-primary ml-60 mr-28 mt-5">Simpan</button>
        <button className="btn btn-secondary">Batal</button>
      </section>
      <section>
        <div className="container mx-auto mt-32">
          <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

            {getData.map((val, idx) => (
              <div key={idx} className=" card bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                <div className="grid justify-items-start">
                  <figure className="px-10 pt-10  mx-auto">
                    <img src={val.logo} alt="Shoes" className="rounded-xl max-h-[150px]" />
                  </figure>
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold text-[#3F427B]">{val.job}</h2>
                  <p className="text-lg text-[#3F427B]">{val.location}</p>
                  <div className="card-actions flex mt-12">
                    <button className="btn btn-primary w-full self-end font-bold" onClick={() => detailPage(val.detail)}>Lihat</button>
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

export default UbahProfil;