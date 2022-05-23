import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Graph from './images/iconly/Graph.svg';
import File from './images/iconly/File.svg';
import Profile from './images/iconly/Profile.svg';
import Feedback from './images/iconly/Feedback.svg';

function UbahProfilAdmin() {
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const { data, error, count } = await supabase
      .from('user')
      .select('*', { count: 'exact' })

    setUserData(data);
    setUserCount(count);
  }



  return (
    <>
      <section className="grid grid-cols-5 gap-4">
        <div className="relative card rounded-none h-screen bg-white w-96 drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
          <div className="mx-12">
            <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Careerly</a>
            <div className="mt-24">
              <ul className="menu mx-auto w-full">
                <li><a className="rounded-xl"><img src={Graph} /> Ringkasan</a></li>
                <li><a className="rounded-xl"><img src={File} /> Laporan</a></li>
                <li><a className="active rounded-xl font-bold"><img src={Profile} /> Profile</a></li>
                <li><a className="rounded-xl"><img src={Feedback} /> Feedback</a></li>
              </ul>
              <button className="absolute inset-x-12 bottom-10 btn btn-danger bg-red-500 text-white">Logout</button>
            </div>
          </div>
        </div>

        <div className="col-span-4 mx-24">
          <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-bold">Profile</a>
          <div className="grid grid-cols-3 gap-x-4 mt-12">
          </div>
          <div className="form-control px-4 ml-0">
            <label className="label" htmlFor="upload">
              <span className="label-text">File Upload</span>
            </label>
            <label className="input-group">
              <input type="text" id="upload" placeholder="Choose a File" className="input input-bordered w-1/4 max-w-xs" />
              <span className="label-text">Pilih</span>

            </label>
          </div>
          <div className="form-control px-4 mt-5 ml-0">
            <label className="label" htmlFor="nama">
              <span className="label-text">Nama Lengkap</span>
            </label>
            <input type="text" id="nama" placeholder="Ketikkan Nama Lengkap" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control px-4 mt-5 ml-0">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input type="text" id="email" placeholder="Ketikkan Email" className="input input-bordered w-full max-w-xs" />
          </div>
          <button className="btn btn-primary ml-4 mr-28 mt-10 text-white">Simpan</button>
          <button className="btn btn-secondary text-white bg-red-500">Batal</button>
        </div>
      </section>

    </>
  );
}

export default UbahProfilAdmin;