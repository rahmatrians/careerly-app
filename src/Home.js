import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid';
import './CustomButton.css';

function Home() {
  useEffect(() => {
  }, [])

  return (
    <>
      <section className="fixed z-50 top-0 left-0 right-0">
        <div className="navbar bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.07)]">
          <div className="container mx-auto">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl font-bold">Careerly</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><a>Home</a></li>
                <li><a>Kategori</a></li>
                <li><a>Tentang Kami</a></li>
                <li><a><button className="btn btn-primary ">Login</button></a></li>
              </ul>
            </div>
          </div>
        </div> {/* end of top bar */}
      </section>

      <section>
        <div className=" mt-40">
          <h1 className="text-center text-3xl font-normal">Bangun dan Ciptakan Karir Impianmu Bersama Careerly</h1>
          <h4 className="mt-5 text-center font-bold text-xl">because we care</h4>


          <div className="container  mx-auto mt-16">
            <div className="flex flex-row gap-x-8 mx-28">

              <a href="/test" className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                <div>
                  <div className="grid justify-items-start">
                    <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                  </div>
                  <div className="card-body gap-y-5">
                    <h2 className="text-3xl font-normal text-[#3F427B]">Seminar / <br /> Workshop</h2>
                    <div className="grid justify-items-end">
                      <button className="group btn btn-sm btn-primary x-btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 stroke-[#6171FE] group-hover:stroke-white" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></button>
                    </div>
                  </div>
                </div>
              </a>{/* end of category card  */}


              <a href="/test" className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                <div>
                  <div className="grid justify-items-start">
                    <figure className="px-10 pt-10">
                      <img src={require('./images/workshop.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                  </div>
                  <div className="card-body gap-y-5">
                    <h2 className="text-3xl font-normal text-[#3F427B]">Seminar / <br /> Workshop</h2>
                    <div className="grid justify-items-end">
                      <button className="group btn btn-sm btn-primary x-btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 stroke-[#6171FE] group-hover:stroke-white" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></button>
                    </div>
                  </div>
                </div>
              </a>{/* end of category card  */}


              <a href="/test" className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                <div>
                  <div className="grid justify-items-start">
                    <figure className="px-10 pt-10">
                      <img src={require('./images/work.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                  </div>
                  <div className="card-body gap-y-5">
                    <h2 className="text-3xl font-normal text-[#3F427B]">Seminar / <br /> Workshop</h2>
                    <div className="grid justify-items-end">
                      <button className="group btn btn-sm btn-primary x-btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 stroke-[#6171FE] group-hover:stroke-white" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></button>
                    </div>
                  </div>
                </div>
              </a>{/* end of category card  */}

            </div> {/* end of category wrapper */}
          </div> {/* end of category container */}

        </div>
      </section>

      <section className="h-screen flex mt-24">
        <div className="bg-white self-center w-full drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] p-12 h-4/6">
          <div className="container mx-auto h-full grid content-center">
            <h1 className="font-bold text-3xl  font-normal">Apa itu Careerly?</h1>
            <h4 className="mt-5 text-2xl">Careerly merupakan suatu platform Sistem Rekomendasi yang membantu anda
              dalam membangun <br />Karir Mulai dari Mengasah Kemampuan Hingga Memiliki
              Pekerjaan khususnya Bidang Teknologi</h4>
          </div>
        </div>
      </section>


      <section className="h-screen">
        <div className="h-full grid mx-auto content-center">

          <div className="container mx-auto mt-16">
            <div className="mx-28">
              <h1 className="font-bold text-3xl font-normal">Kenapa Careerly?</h1>
              <div className="mt-20 flex flex-row gap-x-8">


                <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                  {/* <div className="grid justify-items-start">
                      <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                    </div> */}
                  <h2 className="text-2xl font-normal  text-[#3F427B]">Menawarkan berbagai pilihan-pilihan terbaik</h2>
                </div> {/* end of category card  */}



                <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                  {/* <div className="grid justify-items-start">
                      <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                    </div> */}
                  <h2 className="text-2xl font-normal  text-[#3F427B]">Berbagi Pengetahuan seputar dunia karir</h2>
                </div> {/* end of category card  */}



                <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                  {/* <div className="grid justify-items-start">
                      <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                    </div> */}
                  <h2 className="text-2xl font-normal  text-[#3F427B]">Memperluas koneksi dengan siapapun tanpa batas</h2>
                </div> {/* end of category card  */}

              </div>

            </div> {/* end of category wrapper */}
          </div> {/* end of category container */}

        </div>
      </section>


      <section className="h-32 mt-32">
        <div className="h-full grid mx-auto content-center">
          <div className="container flex flex-row justify-between mx-auto">
            <h1 className="font-bold text-xl font-normal">Careerly</h1>
            <h1 className="text-xl font-normal">Copyright@20222</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;