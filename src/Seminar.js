import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector} from 'react-redux';

import Header from './components/Header';

function Seminar() {
  const storeItem = useSelector(state => state);
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
    .eq('route','seminar')
    .single();
    setCategoryId(data.id);
  }

  const searchingData = async () => {
    console.log(search);
    const url = 'http://localhost:8000/seminar/'+search;

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
          user_id: storeItem.userId,
          category_id: categoryId,
        }
      ])
  
    if (error) {
      console.log(error.message);
    }
  }


 return(
    <>
      <Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

      <section>
        <div className=" mt-40">
        <h1 className="text-center text-3xl font-normal">Temukan Seminar atau Workshop impianmu</h1>
        <div className="form-control mt-12 bg-white self-center w-3/6 mx-auto drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] p-4 h-4/6 rounded-lg">
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
      <div className="container mx-auto zmt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

                  {getData.map((val, idx) => (
                  <div key={idx} className=" card bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                    <div className="grid justify-items-start">
                      <figure className="px-10 pt-10  mx-auto">
                        <img src={val.image} alt="Shoes" className="rounded-xl max-h-[150px]" />
                      </figure>
                    </div>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-[#3F427B]">{val.title}</h2>
                      <div className="card-actions flex mt-12">
                      <Link to="/SeminarDetail" state={val} className="link  btn btn-primary w-full self-end font-bold no-underline">Lihat</Link>
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

export default Seminar;