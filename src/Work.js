import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Work() {
  const userId = 'efcba67b-8a2f-41ea-8559-1f1f92a289c5';
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [getData, setGetData] = useState([]);
  
  useEffect(() => {
    getCategory();
  }, [getData])

  const getCategory = async () => {
    const { data, error } = await supabase
    .from('category')
    .select()
    .eq('route','work')
    .single();
    setCategoryId(data.id);
  }

  // const detailPage = async () => {
// console.log('detail cui',data);
    // fetch("http://localhost:8000/detail", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'}, 
    //   body: JSON.stringify(data)
    // }).then(res => {
    //   console.log("Request complete! response:", res);
    // });


    // await axios.post('http://localhost:8000/detail', {
    //   data: 'data'
    // })
    // .then((response) => {
    //   // console.log(response.data);
    //   nav({pathname:`/detail`, state:response});
    // }, (error) => {
    //   console.log(error);
    // });
  // }


  const searchingData = async () => {
    // console.log(search);
    // const url = 'http://localhost:8000/results/' + search;
    const url = 'http://localhost:8000/jobseeker/' + search;

    axios(url)
      .then(response => {
        const html = response.data
        console.log('datanya', html);
        setGetData(html);
      })

      const { data, error } = await supabase
      .from('history')
      .insert([
        {
          name: search,
          user_id: userId,
          category_id: categoryId,
        }
      ])
  
    if (error) {
      console.log(error.message);
    }
  }
  
  //  let dataKu = [
  //     {nama : 'react js aja', harga : 'Rp. 400.000'},
  //     {nama : 'flutter nih', harga : 'Rp. 220.000'},
  //     {nama : 'react native ', harga : 'Rp. 220.000'},
  //     {nama : 'vue js', harga : 'Rp. 220.000'},
  //     {nama : 'svelte', harga : 'Rp. 220.000'},
  //     {nama : 'node js', harga : 'Rp. 220.000'},
  //   ];



 return(
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
        <h1 className="text-center text-3xl font-normal">Temukan Pekerjaan impianmu</h1>
        <div className="form-control mt-12 bg-white self-center w-3/6 mx-auto drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] p-4 h-4/6 rounded-lg">
          <div className="input-group">
          <input value={search} onChange={e => setSearch(e.target.value)}  type="text" placeholder="Cari Kelas impianmu..." className="input input-bordered input-primary w-full"/>
            <button onClick={() => searchingData()}  className="btn btn-square btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        </div>
      </section>


      <section>
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

                  {getData.map((val, idx) => (
                  <div key={idx} className=" card bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)] grid content-between">
                    <div className="grid justify-items-start">
                      <figure className="px-10 pt-10  mx-auto">
                        <img src={val.logo} alt="Shoes" className="rounded-xl max-h-[150px]" />
                      </figure>
                    </div>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-[#3F427B]">{val.job}</h2>
                      <p className="text-lg text-[#3F427B]">{val.location}</p>
                      <div className="card-actions flex mt-12">
                      <Link to="/workDetail" state={val} className="link  btn btn-primary w-full self-end font-bold no-underline">
                      Lihat
                      {/* <button className="btn btn-primary w-full self-end font-bold" onClick={() => detailPage()}>Lihat</button> */}
                        </Link>
                      </div>
                      </div>
                    </div>
                    ))}
                
                </div>
          </div>

      </section>
     
    </>
 );
}

export default Work;