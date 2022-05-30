import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Chart from "react-apexcharts";

import SideNav from './components/SideNav';

function Laporan() {
    const navigate = useNavigate();
    const storeItem = useSelector(state => state);
    const [userData, setUserData] = useState([]);
    const [userCount, setUserCount] = useState("");


    const [optionsCat, setOptionsCat] = useState({ labels: [] });
    const [seriesCat, setSeriesCat] = useState([]);

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
                <div className="relative col-span-4">
                    <SideNav data="2" />
                </div>

                <section className="relative col-span-8">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-4">
                            <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Laporan</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>

                            <div className="grid grid-rows-1 gap-y-4">
                                <div className="mb-2 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 mt-5">
                                        <div className="donut">
                                            <a className="normal-case text-l text-left">Kategori Paling Dicari</a>
                                            <Chart options={optionsCat} series={seriesCat} type="donut" className="mt-6" width="480" />
                                        </div>
                                        <Link to="/laporancategory" className="btn btn-primary mx-auto mt-0 w-20 mr-0">Lihat</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="ml-auto mx-2 mt-2 gap-9 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <div className="donut">
                                            <a className="normal-case text-l text-left">Pencarian Kategori Terbanyak</a>
                                            <Chart options={optionsSrc} series={seriesSrc} type="donut" className="mt-6" width="400" />
                                        </div>
                                        <Link to="/laporansearched" className="btn btn-primary mx-auto mt-0 w-20 mr-0">Lihat</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="mt-5 ml-auto card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <a className="normal-case text-l text-left">Sedang Dicari Pengunjung</a>
                                        <button className="btn btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="mt-5 ml-auto card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <a className="normal-case text-l text-left">Kota Pengunjung Terbanyak</a>
                                        <button className="btn btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
                                    </div>
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

export default Laporan;