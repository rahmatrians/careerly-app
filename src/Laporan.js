import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { useSelector } from 'react-redux';

import SideNav from './components/SideNav';

function Laporan() {
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
                    <SideNav data="2" />
                </div>

                <section className="relative col-span-9">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-4">
                            <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Laporan</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>

                            <div className="grid grid-rows-1 gap-y-4">
                                <div className="mb-2 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 mt-5">
                                        <a className="normal-case text-l text-left">Kategori Paling Dicari</a>
                                        <button className="btn btn-active btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="ml-auto mx-2 mt-2 gap-9 card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <a className="normal-case text-l text-left">Pencarian Kategori Terbanyak</a>
                                        <button className="btn btn-active btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="mt-5 ml-auto card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <a className="normal-case text-l text-left">Sedang Dicari Pengunjung</a>
                                        <button className="btn btn-active btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mx-0">
                                <div className="mt-5 ml-auto card p-5 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                                    <div className="grid grid-cols-2 gap-96 mt-5">
                                        <a className="normal-case text-l text-left">Kota Pengunjung Terbanyak</a>
                                        <button className="btn btn-active btn-primary mx-auto mt-0 w-20 mr-0">Lihat</button>
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