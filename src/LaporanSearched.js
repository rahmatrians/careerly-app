import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from './redux/StoreItem';
import Chart from "react-apexcharts";

import SideNav from './components/SideNav';

function LaporanSearched() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");
  const [feedbackCount, setFeedbackCount] = useState("");

  const [optionsSrc, setOptionsSrc] = useState({ labels: [] });
  const [seriesSrc, setSeriesSrc] = useState([]);


  useEffect(async () => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token && navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    } else {
      localStorage.clear();
      navigate('/login');
    }

    const { data: dataSrc } = await supabase
      .rpc('searchcount')

    const optSrcTemp = [];
    const serSrcTemp = [];

    dataSrc.map((val, key) => {
      optSrcTemp.push(val.name)
      serSrcTemp.push(val.history_total)
    });
    setOptionsSrc({ labels: optSrcTemp });
    setSeriesSrc(serSrcTemp);
    setUserData(dataSrc);
    console.log('yoi', dataSrc);
  }, [])



  const test = () => {
    console.log('test = ', JSON.parse(localStorage.getItem('reduxState')));
  }



  return (
    <>
      <div className='grid grid-cols-12'>
        <div className="relative col-span-3">
          <SideNav data="2" />
        </div>

        <section className="relative col-span-9">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
              <div className="flex flex-row justify-between my-12">
                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Laporan Pencarian Srcegory</a>
                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
              </div>

              <div className="grid grid-rows-1 gap-y-4">
                <div className="mb-2 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                  <div className="">
                    {/* <div className="donut">
                      <a className="normal-case text-l text-left">Kategori Paling Dicari</a>
                      <Chart options={optionsSrc} series={seriesSrc} type="donut" className="mt-6" width="380" />
                    </div> */}

                    <div class="overflow-x-auto w-full">
                      <table class="table w-full">
                        <thead>
                          <tr>
                            <th>Srcegory Name</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData.map((val) => (
                            <tr>
                              <td>{val.name}</td>
                              <td><b>{val.history_total} Kali  </b></td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Srcegory Name</th>
                            <th>Total</th>
                          </tr>
                        </tfoot>

                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LaporanSearched;