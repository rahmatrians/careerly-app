import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import Circle from "./images/Circle.svg";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import SideNav from './components/SideNav';

function Feedback() {
    const navigate = useNavigate();
    const storeItem = useSelector(state => state);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const session = supabase.auth.session();
        if (session !== null) {
          storeItem.token != session.access_token  &&  navigate('/login');
          session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
        }else{
          localStorage.clear();
          navigate('/login');
        }
        
        getData();
    }, [])

    const dateFormat = (val) => {
        let tgl = new Date(val).getDate() + "-" + new Date(val).getMonth() + "-"+new Date(val).getFullYear();
        return tgl;
    }

    const getData = async () => {
        const { data, error } = await supabase
            .from('feedback')
            .select()
        setUserData(data);
    }



    return (
        <>
            <div className='grid grid-cols-12'>
                <div className="relative col-span-4">
                    <SideNav data="4" />
                </div>

                <section className="col-span-8">
                    <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4">
                <div className="flex flex-row justify-between my-12">
                                <a className="mt-12 btn btn-ghost normal-case text-3xl font-bold">Feedback</a>
                                <a className="mt-12 btn btn-ghost normal-case text-xl text-right font-medium">Hi,{storeItem.name}</a>
                            </div>

                    <div className="grid grid-cols-2 gap-x-10 mt-12">

                    {userData.map((val)=> (
                        <div id={val.id} className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=92310" />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Farhan</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">{val.message}</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">{dateFormat(val.created_at)}</p>
                                <button className="btn btn-primary">Lihat</button>
                            </div>
                        </div>
                        ))}

<div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={Circle} />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Yuli</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Makasih aku jadi punya banyak referensi untuk belajar course yang bagus-bagus</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">19-05-2022</p>
                                <button className="btn btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92810" />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Ani</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Aku suka sama aplikasi ini, sangat membantuku yg ingin cari kerja</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">29-05-2022</p>
                                <button className="btn btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=91810" />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Nurul</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Beruntung bisa tahu aplikasi keren ini!!</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">17-05-2022</p>
                                <button className="btn btn-primary">Lihat</button>
                            </div>
                        </div>

                        <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=96221" />

                                </div>
                                <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">Andri</p>
                            </div>
                            <p className="text-sm font-regular text-[#3F427B] mt-6">Semoga semakin berkembang terus aplikasinya!</p>

                            <div className="flex flex-row justify-between mt-10">
                                <p className="text-sm font-regular text-[#3F427B] mt-6">22-05-2022</p>
                                <button className="btn btn-primary">Lihat</button>
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

export default Feedback;