import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from './redux/StoreItem';
import Chart from "react-apexcharts";

import SideNav from './components/SideNav';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");
  const [feedbackCount, setFeedbackCount] = useState("");

  const [option, setOption] = useState({});
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);



  useEffect(() => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token && navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    } else {
      localStorage.clear();
      navigate('/login');
    }

    getData();
  }, [])



  const test = () => {
    console.log('test = ', JSON.parse(localStorage.getItem('reduxState')));
  }


  const getData = async () => {
    const { data, error, count } = await supabase
      .from('user')
      .select('*', { count: 'exact' })

    setUserData(data);
    setUserCount(count);

    const { count: countFeedback } = await supabase
      .from('feedback')
      .select('*', { count: 'exact' })

    setFeedbackCount(countFeedback);
  }



  return (
    <>
      <div className='grid grid-cols-12'>
        <div className="col-span-4">
          <SideNav data="1" />
        </div>

        <section className="col-span-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
              <div className="flex flex-row justify-between my-12">
                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Ringkasan</a>
                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
              </div>

              <div className="grid grid-cols-3 gap-x-4">

                <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
                  <div className="flex mb-5">
                    <p className="bg-[#FFEED6] text-[#FD795C] p-5 text-3xl font-bold rounded-xl ">{userCount ? userCount : 0}</p>
                  </div>
                  <p className="text-xl font-medium text-[#3F427B]">Total Pengguna</p>
                </div>

                <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
                  <div className="flex mb-5">
                    <p className="bg-[#D6DFFF] text-[#3F427B] p-5 text-3xl font-bold rounded-xl ">{feedbackCount ? feedbackCount : 0}</p>
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


          </div>
        </section>
      </div>





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