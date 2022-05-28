import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid';
import './CustomButton.css';
import { useNavigate } from "react-router-dom";
import supabase from './config/supabase';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';

function Home() {
  const storeItem = useSelector(state => state);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [getCategoryData, setGetCategoryData] = useState([]);

  useEffect(() => {
    // const session = supabase.auth.session();
    // if (session !== null) {
    //   storeItem.token != session.access_token && navigate('login');
    //   console.log((session.access_token !== null && storeItem.token == session.access_token) ? 'masih aktif' : 'expired cuk');
    //   session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    // } else {
    //   localStorage.clear();
    //   navigate('login');
    // }

    getCategory();
  }, [])

  const getCategory = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('category')
      .select()
      .order('position', { ascending: true });

    await setGetCategoryData(data);
    setLoading(false)
  }

  const history = async (val) => {
    const { data, error } = await supabase
      .from('history')
      .insert([
        {
          name: val.id,
          user_id: storeItem.userId,
          category_id: val.id,
        }
      ])


    if (error) {
      console.log(error.message);
    } else {
      navigate('/' + val.route);
    }
  }

  return (
    <>
      {!loading &&
        <>
          <Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

          <section id="category">
            <div className=" mt-40">
              <h1 className="text-center text-3xl font-normal">Bangun dan Ciptakan Karir Impianmu Bersama Careerly</h1>
              <h4 className="mt-5 text-center font-bold text-xl">because we care</h4>


              <div className="container  mx-auto mt-16">
                <div className="flex flex-row gap-x-8 mx-28">

                  {getCategoryData.map((val) => (
                    <button key={val.id} onClick={() => history({ id: val.id, route: val.route })} className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                      <div>
                        <div className="grid justify-items-start">
                          <figure className="px-10 pt-10">
                            <img src={val.image_url} alt="Shoes" className="rounded-xl max-h-[150px]" />
                          </figure>
                        </div>
                        <div className="card-body gap-y-5">
                          <h2 className="text-3xl font-normal max-w-[70%] text-left text-[#3F427B]">{val.name}</h2>
                          <div className="grid justify-items-end">
                            <div className="group btn btn-sm btn-primary x-btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 stroke-[#6171FE] group-hover:stroke-white" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg></div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}


                  {/* <a href="/seminar" className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
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
              </a> */}
                  {/* end of category card  */}


                  {/* <a href="/work" className="flex-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                <div>
                  <div className="grid justify-items-start">
                    <figure className="px-10 pt-10">
                      <img src={require('./images/work.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                  </div>
                  <div className="card-body gap-y-5">
                    <h2 className="text-3xl font-normal text-[#3F427B]">Lowongan Kerja / <br />Magang</h2>
                    <div className="grid justify-items-end">
                      <button className="group btn btn-sm btn-primary x-btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 stroke-[#6171FE] group-hover:stroke-white" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg></button>
                    </div>
                  </div>
                </div>
              </a> */}
                  {/* end of category card  */}

                </div> {/* end of category wrapper */}
              </div> {/* end of category container */}

            </div>
          </section>

          <section className="h-screen flex mt-24" id="about">
            <div className="bg-white self-center w-full drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] p-12 h-4/6">
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


                    <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                      {/* <div className="grid justify-items-start">
                      <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                    </div> */}
                      <h2 className="text-2xl font-normal  text-[#3F427B]">Menawarkan berbagai pilihan-pilihan terbaik</h2>
                    </div> {/* end of category card  */}



                    <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                      {/* <div className="grid justify-items-start">
                      <figure className="px-10 pt-10">
                      <img src={require('./images/course.jpg')} alt="Shoes" className="rounded-xl max-h-[150px]" />
                    </figure>
                    </div> */}
                      <h2 className="text-2xl font-normal  text-[#3F427B]">Berbagi Pengetahuan seputar dunia karir</h2>
                    </div> {/* end of category card  */}



                    <div className="flex-auto min-h-full py-20 px-10 text-center my-auto card w-44 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
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
      }
    </>
  );
}

export default Home;