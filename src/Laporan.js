import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Graph from './images/iconly/Graph.svg';
import File from './images/iconly/File.svg';
import Profile from './images/iconly/Profile.svg';
import Feedback from './images/iconly/Feedback.svg';

function Laporan() {
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
                                <li><a className="active rounded-xl font-bold"><img src={File} /> Laporan</a></li>
                                <li><a className="rounded-xl"><img src={Profile} /> Profile</a></li>
                                <li><a className="rounded-xl"><img src={Feedback} /> Feedback</a></li>
                            </ul>
                            <button className="absolute inset-x-12 bottom-10 btn btn-danger">Logout</button>
                        </div>
                    </div>
                </div>


                <div className="col-span-4 mx-24">
                    <div className="grid grid-cols-2 gap-96 mt-5">
                        <a className="mt-12 mb-12 flex justify-start btn btn-ghost normal-case text-2xl font-bold">Laporan</a>
                        <a className="mt-12 mb-12 flex justify-end btn btn-ghost normal-case text-xl font-bold">Hi, Administrator</a>
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

export default Laporan;