import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Graph from './images/iconly/Graph.svg';
import File from './images/iconly/File.svg';
import Profile from './images/iconly/Profile.svg';
import Feedback from './images/iconly/Feedback.svg';

import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from './redux/StoreItem';

function Dashboard() {
  const dispatch = useDispatch();
  const storeItem = useSelector(state => state);
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");
  const [FeedbackCount, setFeedbackCount] = useState("");
  

  useEffect(() => {
    getData();
  }, [])

  

  const test = () => {
    console.log('test = ',JSON.parse(localStorage.getItem('reduxState')));
  }


  const getData = async () => {
    const { data, error, count } = await supabase
      .from('user')
      .select('*', { count: 'exact' })

    setUserData(data);
    setUserCount(count);

    const { countFeedback } = await supabase
      .from('user')
      .select('*', { count: 'exact' })

    setFeedbackCount(countFeedback);
  }



 return(
    <>
      <section className="grid grid-cols-5 gap-4">
        <div className="relative card rounded-none h-screen bg-white w-96 drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
            <div className="mx-12">
            <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Careerly</a>
            <div className="mt-24">
            <ul className="menu mx-auto w-full">
              <li><a className="active rounded-xl font-bold"><img src={Graph} /> Ringkasan</a></li>
              <li><a className="rounded-xl"><img src={File} /> Laporan</a></li>
              <li><a className="rounded-xl"><img src={Profile} /> Profile</a></li>
              <li><a className="rounded-xl"><img src={Feedback} /> Feedback</a></li>
          </ul>
          <button className="absolute inset-x-12 bottom-10 btn btn-danger">Logout</button>
        </div>
        </div>
        </div>


        <div className="col-span-4 mx-24">
        <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-bold">Hi, {storeItem.name}</a>
        <div className="grid grid-cols-3 gap-x-4 mt-12">
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
        <div className="flex mb-5">
          <p className="bg-[#FFEED6] text-[#FD795C] p-5 text-3xl font-bold rounded-xl ">{userCount ? userCount : 0}</p>
        </div>
          <p className="text-xl font-medium text-[#3F427B]">Total Pengguna</p>
        </div>
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
        <div className="flex mb-5">
          <p className="bg-[#D6DFFF] text-[#3F427B] p-5 text-3xl font-bold rounded-xl ">{FeedbackCount ? FeedbackCount : 0}</p>
        </div>
          <p className="text-xl font-medium text-[#3F427B]">Feedback Pengguna</p>
        </div>
    
        <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
        <div className="flex mb-5">
          <p className="bg-[#FFD6E2] text-[#E82660] p-5 text-3xl font-bold rounded-xl ">1,407</p>
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