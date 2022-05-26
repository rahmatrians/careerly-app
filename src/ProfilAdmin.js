import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { useSelector } from 'react-redux';

import SideNav from './components/SideNav';

function ProfilAdmin() {
  const storeItem = useSelector(state => state);
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
            <div className='grid grid-cols-12'>
                <div className="relative col-span-3">
                    <SideNav data="3" />
                </div>

                <section className="col-span-9">
        <div className="col-span-4">
                    <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-4">
                    <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Laporan</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>
                            <div className="grid grid-cols-2 gap-x-10 mt-12">
          </div>
          <div className="container mx-auto">
            <div className="flex flex-row pl-10 justify-left">
              <img src="https://api.lorem.space/image/face?hash=92310" className="profilepic w-24 rounded-full" />
              <div className="flex flex-col justify-left">
                <span className="text-lg font-bold px-10 mt-7 text-3xl font-normal">Administrator</span>
                <span className="text-lg px-10 mt-2 font-bold text-xl">administrator@gmail.com</span>
              </div>
              <div className="flex row ml-60 mt-2">
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