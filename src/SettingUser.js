import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid';
import './CustomButton.css';
import supabase from './config/supabase';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, TOKEN } from './redux/StoreItem';
import { Link, useNavigate } from "react-router-dom";


import Header from './components/Header';

function SettingUser() {
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log(storeItem);
    getUser();
  }, [])


  const getUser = async () => {
    const session = supabase.auth.session();
    if (session !== null) {
      storeItem.token != session.access_token  &&  navigate('/login');
      session.access_token !== null && storeItem.token == session.access_token ? console.log('') : localStorage.clear();
    }else{
      localStorage.clear();
      navigate('/login');
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('user')
      .select()
      .eq('id', storeItem.userId)
      .single();
    console.log(data);
    await setUserData(data);
    setLoading(false)
  }
  
  const wishlist = async () => {
    const { data, error, count } = await supabase
    .from('saved')
    .select('*', { count: 'exact' })
    .eq('user_id', storeItem.userId);
  console.log(count,data);
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    dispatch({ type: TOKEN, token: null });
    dispatch({ type: LOGIN, payload: { isLogin: false, userId: null, name: null, email: null, profilePict: null, roleId: null } });
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
          {!loading &&
        <>
              <Header data={{ fullname: storeItem.name, isLogin: storeItem.isLogin }} />

      <section>
        <div className="container my-40 mx-20 mr-20 ">
          <div className="flex flex-row pl-10 pt-10 pr-10 mb-20 justify-center">
            <img src={userData.profile_pic_url} className="w-24 rounded-full" />
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold px-10 text-2xl font-normal">{userData.fullname}</span>
              <span className="text-lg px-10 mt-1 font-medium text-gray-500 text-xl">{storeItem.roleId == '189c2b10-ad8e-417b-98aa-1a95418aacb9' ? 'guest@gmail.com' : userData.email}</span>
            </div>
            <div className="flex row ml-60 mt-10">
              <button onClick={() => wishlist()} className="btn btn-md  md:btn-md btn-primary text-white">Wishlist</button>
              <button onClick={() => logout()} className="ml-5 btn btn-md  md:btn-md bg-red-500 text-white">Logout</button>
            </div>
          </div>

          <div className="card mx-auto w-3/4 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
            <div className="card-body">
              <table>
                <tr>
                  <td className="font-bold text-md">
                    Kota Tinggal
                  </td>
                  <td className="font-bold text-md">
                    Tanggal Lahir
                  </td>
                  <td className="font-bold text-md">
                    Status Pendidikan
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-xl">
                  {userData.city_residence}
                  </td>
                  <td className="font-normal text-xl">
                  {userData.birthdate}
                  </td>
                  <td className="font-normal text-xl">
                  {userData.education_status}
                  </td>
                </tr>
                <div className="pt-10"> </div>
                <tr>
                  <td className="font-bold text-md">
                    Jenis Kelamin
                  </td>
                  <td className="font-bold text-md">
                    No. Handphone
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-xl">
                  {userData.gender}
                  </td>
                  <td className="font-normal text-xl">
                  {userData.phone_number}
                  </td>
                </tr>
              </table>
              <div className="card-actions justify-end">
                <Link to="/ubahprofil"><button className="btn btn-outline btn-primary">Ubah Profil</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      }
    </>
  );
}


export default SettingUser