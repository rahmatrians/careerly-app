import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import supabase from './config/supabase';

import SideNav from './components/SideNav';

function ProfilAdmin() {
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
      .eq('id', storeItem.userId)
      .single();

    setUserData(data);
    setUserCount(count);
  }



  return (
    <>
            <div className='grid grid-cols-12'>
                <div className="relative col-span-4">
                    <SideNav data="3" />
                </div>

                <section className="col-span-8">
        <div className="col-span-4">
                    <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-4">
                    <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Profile</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>
                            <div className="grid grid-cols-2 gap-x-10 mt-12">
          </div>
          <div className="container mx-auto">
            <div className="flex flex-row pl-10 place-content-between justify-left">
              <div className="flex flex-row justify-left">
              <img src={"https://api.lorem.space/image/face?hash=92310"} className="profilepic rounded-full" />
              <div className="flex flex-col">
                <span className="text-lg font-bold px-10 mt-7 text-3xl font-normal">Administrator</span>
                <span className="text-lg px-10 mt-2 font-bold text-xl">administrator@gmail.com</span>
              </div>
              </div>
              <div className="flex flex-row mt-2">
                <button className="btn btn-md md:btn-md btn-primary text-white w-5/4 mt-7">Ubah Profil</button>
              </div>
            </div>
          </div>
        </div>
        </div>



        </div>
      </section>
        </div>


      <section>
        <div className="container mx-auto mt-32">
          <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

          </div>
        </div>
      </section>

    </>
  );
}

export default ProfilAdmin;