import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';
import supabase from './config/supabase';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import axios from 'axios';

import Header from './components/Header';

function CourseDetail() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const location = useLocation();
  const categoryId = 'b1167659-1242-4114-abe0-9970010d7f87';
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);
  const [getResponse, setGetResponse] = useState([]);
  const [saved, setSaved] = useState(false);
  
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

    setUrl(location.state.url);
    setGetData(location.state);
    getDescription(location.state.url);
    savedCheck(location.state.url);
  }, [])


  
  const getDescription = (urlLink) => {
    axios.post('https://careerly-service.herokuapp.com/course-detail', {
      data: JSON.stringify(urlLink)
    })
      .then((response) => {
        setGetResponse(response.data[1]);
        console.log(response.data[1], 'mana?');
      }, (error) => {
        console.log(error);
      });
  }

  const savedCheck = async (urlData) => {
    const { data, error, count } = await supabase
      .from('saved')
      .select('*', { count: 'exact' })
      .eq('url', urlData);

      if (count > 0) {
        setSaved(true)
      }

  }


  const save = async () => {
    const { data, error } = await supabase
    .from('saved')
    .insert([
      {
        url: url,
        user_id: storeItem.userId,
        category_id: categoryId,
      }
    ])

    if (error) {
      console.log(error.message);
    }else {
      setSaved(true)
    }
  }
  
  // const testAja = () => {
  //    axios.post('https://careerly-service.herokuapp.com/course/detail', {
  //     // data: JSON.stringify({ data: url })
  //     data: JSON.stringify(url)
  //   })
  //   // axios({
  //   //   method: 'post',
  //   //   url: 'https://careerly-service.herokuapp.com/jobs/detail',
  //   //   data: {
  //   //     firstName: 'Finn',
  //   //     lastName: 'Williams'
  //   //   }
  //   // })
  //   .then((response) => {
  //     console.log('test',response.data);
  //     setGetResponse(response.data[0].about);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }
  


 return(
  <>
      {!loading &&
        <>
          <Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

  <section>
  <div className=" mt-40">
    <div className="flex font-sans">
      <div className="card card-compact w-96 bg-base-100 shadow-xl relative ml-52">
        <img src={'https://buildwithangga.com'+getData.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <form className="flex-auto p-6 mr-56">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            Harga
          </h1>
          <div className="w-full flex-none text-sm font-semibold text-slate-700 mt-2">{getResponse.price}</div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4 mt-10">
          <a href={url} target="_blank" className="py-3 px-6 font-semibold rounded-md bg-black text-white">Tertarik</a>
          </div>
          {saved ? (
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
            ) : (
            <button onClick={() => save()} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
            <svg width="20" height="20" fill="red" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>

            )}
        </div>
      </form>
    </div>

    <div className="mt-6 ml-52">
      <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
        Tentang
      </button>
      <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
        Materi
      </button>
      <button className="h-8 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-4" type="button">
        Tools
      </button>
    </div>
    </div>
  </section>

  <section>
    <div className='w-8/12 mx-auto mt-20 '>
      {getResponse && (
            <div dangerouslySetInnerHTML={{ __html: getResponse.about }}></div>
          )}
    </div>
  </section>
  </>
      }
    </>
 );
}

export default CourseDetail;