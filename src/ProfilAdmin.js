import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Graph from './images/iconly/Graph.svg';
import File from './images/iconly/File.svg';
import Profile from './images/iconly/Profile.svg';
import Feedback from './images/iconly/Feedback.svg';

function ProfilAdmin() {
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
                <li><a className="active rounded-xl"><img src={Profile} /> Profile</a></li>
                <li><a className="rounded-xl font-bold"><img src={Feedback} /> Feedback</a></li>
              </ul>
              <button className="absolute inset-x-12 bottom-10 btn btn-danger bg-red-500 text-white">Logout</button>
            </div>
          </div>
        </div>

        <div className="col-span-4 mx-24 justify-end">
          <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-bold">Profile</a>
          <div className="grid grid-cols-3 gap-x-4 mt-12">
          </div>
          <div className="container mx-auto">
            <div className="flex flex-row pl-10 justify-left">
              <img src="https://api.lorem.space/image/face?hash=92310" className="profilepic w-24 rounded-full" />
              <div className="flex flex-col justify-left">
                <span className="text-lg font-bold px-10 mt-7 text-3xl font-normal">Administrator</span>
                <span className="text-lg px-10 mt-2 font-bold text-xl">administrator@gmail.com</span>
              </div>
              <div className="flex row ml-60 mt-2">
                <button class="btn btn-md md:btn-md btn-primary text-white w-5/4 mt-7">Ubah Profil</button>
              </div>
            </div>
          </div>
        </div>



      </section>


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