import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from './redux/StoreItem';
import Chart from "react-apexcharts";

import SideNav from './components/SideNav';

function LaporanCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState("");
  const [feedbackCount, setFeedbackCount] = useState("");

  const [optionsCat, setOptionsCat] = useState({ labels: [] });
  const [seriesCat, setSeriesCat] = useState([]);


  useEffect(async () => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token && navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    } else {
      localStorage.clear();
      navigate('/login');
    }

    const { data: dataCat, error } = await supabase
      .rpc('categorycount')

    const optCatTemp = [];
    const serCatTemp = [];

    dataCat.map((val, key) => {
      optCatTemp.push(val.category_name)
      serCatTemp.push(val.category_total)
    });
    setOptionsCat({ labels: optCatTemp });
    setSeriesCat(serCatTemp);
    setUserData(dataCat);
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
                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Laporan Pencarian Category</a>
                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
              </div>

              <div className="grid grid-rows-1 gap-y-4">
                <div className="mb-2 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                  <div className="">
                    {/* <div className="donut">
                      <a className="normal-case text-l text-left">Kategori Paling Dicari</a>
                      <Chart options={optionsCat} series={seriesCat} type="donut" className="mt-6" width="380" />
                    </div> */}

                    <div class="overflow-x-auto w-full">
                      <table class="table w-full">
                        <thead>
                          <tr>
                            <th>Category Name</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData.map((val) => (
                            <tr>
                              <td>{val.category_name}</td>
                              <td><b>{val.category_total} Kali  </b></td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Category Name</th>
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

export default LaporanCategory;