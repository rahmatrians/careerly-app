import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { IconlyProvider, Home, Notification } from 'react-iconly'

function Dashboard() {
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



 return(
    <>
      <section className="grid grid-cols-5 gap-4">
        <div className="relative card rounded-none h-screen bg-white w-96 drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
            <div className="mx-12">
            <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Careerly</a>
                <IconlyProvider
      set='bulk'
      primaryColor='blueviolet'
      secondaryColor='blue'
      stroke='bold'
      size='xlarge'
    >
      <Home />
      <Notification primaryColor='yellow' />
    </IconlyProvider>
            <div className="mt-24">
            <ul className="menu mx-auto w-full">
              <li><a className="active rounded-xl font-bold">Ringkasan</a></li>
              <li><a className="rounded-xl">Laporan</a></li>
              <li><a className="rounded-xl">Profile</a></li>
              <li><a className="rounded-xl">Feedback</a></li>
          </ul>
          <button className="absolute inset-x-12 bottom-10 btn btn-danger">Logout</button>
        </div>
        </div>
        </div>


        <div className="col-span-4 mx-24">
        <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-bold">Hi, Administrator</a>
        <div className="grid grid-cols-3 gap-x-4 mt-12">
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
        <div className="flex mb-5">
          <p className="bg-[#FFEED6] text-[#FD795C] p-5 text-3xl font-bold rounded-xl ">{userCount}</p>
        </div>
          <p className="text-xl font-medium text-[#3F427B]">Total Pengguna</p>
        </div>
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
        <div className="flex mb-5">
          <p className="bg-[#D6DFFF] text-[#3F427B] p-5 text-3xl font-bold rounded-xl ">87</p>
        </div>
          <p className="text-xl font-medium text-[#3F427B]">Feedback Pengguna</p>
        </div>
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
        <div className="flex mb-5">
          <p className="bg-[#FFD6E2] text-[#E82660] p-5 text-3xl font-bold rounded-xl ">1,304</p>
        </div>
          <p className="text-xl font-medium text-[#3F427B]">Kunjungan Hari Ini</p>
        </div>

        </div>
        </div>


      </section>




      {/* <section>
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">
                </div>
          </div>

      </section>
      */}
    </>
 );
}

export default Dashboard;