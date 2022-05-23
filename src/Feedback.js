import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Graph from './images/iconly/Graph.svg';
import File from './images/iconly/File.svg';
import Profile from './images/iconly/Profile.svg';
import Feedback2 from './images/iconly/Feedback.svg';
import Circle from "./images/Circle.svg";

function Feedback() {
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
                    <div className="mx-12 ">
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
                    <div className="flex flex-row justify-between mt-6">
                        <a className="mt-12 btn btn-ghost normal-case text-3xl text-right font-bold ml-6">Feedback</a>
                        <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium ml-6">Hi, Administrator</a>
                    </div>
                    <div className="grid grid-cols-2 gap-x-10 mt-12">

                        <div className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farah Nahwa</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Performa nya tolong dipercepat lagi</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">14-05-2021</p>
                                <button class="btn btn-active btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farah Nahwa</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Performa nya tolong dipercepat lagi</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">14-05-2021</p>
                                <button class="btn btn-active btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farah Nahwa</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Performa nya tolong dipercepat lagi</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">14-05-2021</p>
                                <button class="btn btn-active btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farah Nahwa</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Performa nya tolong dipercepat lagi</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">14-05-2021</p>
                                <button class="btn btn-active btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farah Nahwa</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Performa nya tolong dipercepat lagi</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">14-05-2021</p>
                                <button class="btn btn-active btn-primary">Lihat</button>
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

export default Feedback;