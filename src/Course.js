import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from './components/Header';

function Course() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [getData, setGetData] = useState([]);
  
  
  useEffect(() => {
    const session = supabase.auth.session();
    console.log(storeItem);
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

    getCategory();
  }, [getData])

  const getCategory = async () => {
    const { data, error } = await supabase
    .from('category')
    .select()
    .eq('route','course')
    .single();
    setCategoryId(data.id);
  }

  // const detailPage = async () => {
  //   await axios.post('https://careerly-service.herokuapp.com/detail', {
  //     data: 'data'
  //   })
  //   .then((response) => {
  //     // console.log(response.data);
  //     nav({pathname:`/detail`, state:response});
  //   }, (error) => {
  //     console.log(error);
  //   });
    
  // }

// find course
  const searchingData = async () => {
    const url = 'https://careerly-service.herokuapp.com/course/' + search;

    axios(url)
      .then(response => {
        const html = response.data
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




  return (
    <>

<Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

      <section>
        <div className=" mt-40">
        <h1 className="text-center text-3xl font-normal">Temukan Kelas atau Bootcamp impianmu</h1>
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
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">

                  {getData.map((val, idx) => (
                  <div key={idx} className=" card bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)] grid content-between">
                    <div className="grid justify-items-start">
                      <figure className="px-10 pt-10  mx-auto">
                        <img src={'https://buildwithangga.com'+val.image} alt="Shoes" className="rounded-xl max-h-[150px]" />
                      </figure>
                    </div>
                    <div className="card-body">
                      <h2 className="text-xl font-bold text-[#3F427B]">{val.title}</h2>
                      <p className="text-lg text-[#3F427B]">{val.harga}</p>
                      <div className="card-actions flex mt-12">
                      <Link to="/detail" state={val} className="link  btn btn-primary w-full self-end font-bold no-underline">
                      Lihat
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

export default Course;