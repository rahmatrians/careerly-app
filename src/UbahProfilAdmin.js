import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import SideNav from './components/SideNav';

function UbahProfilAdmin() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);

  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");

  useEffect(() => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

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
                <div className='grid grid-cols-12'>
                <div className="relative col-span-3">
                    <SideNav data="4" />
                </div>

                <section className="relative col-span-9">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-4">
                            <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Ubah Profil</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>

        <div className="col-span-4">
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
        </div>
        </div>
      </section>
        </div>
    </>
  );
}

export default UbahProfilAdmin;