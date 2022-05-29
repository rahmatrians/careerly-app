import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import supabase from './config/supabase';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, TOKEN } from './redux/StoreItem';

function GuestBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [getData, setGetData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [session, setSession] = useState("");
  const [alert, setAlert] = useState(false);
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");

  useEffect(() => {
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
  }

  const validate = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: 'sulistripamulang80.sp@gmail.com',
      password: 'aegisorta',
    })

    if (error) {
      console.log('error', error);
      setErrorMessage(error.message);
      setAlert(true);

    } else {
      const { data: userData, error: errorId } = await supabase
        .from('user')
        .select()
        .eq('user_uid', user.id)
        .single();

      if (!error) {
        dispatch({ type: TOKEN, token: session.access_token });
        dispatch({ type: LOGIN, payload: { isLogin: true, userId: userData.id, name: userData.fullname, email: userData.email, profilePict: userData.profile_pic_url, roleId: userData.role_id } });
        navigate('/');
      }
    }
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">

          <div className="card-body">
            <h1 className="card-title mx-auto my-4">Buku Tamu</h1>
            <label className="label" htmlFor="username">
              <span className="label-text">Nama</span>
            </label>
            <input value={nama} onChange={e => setNama(e.target.value)} type="text" id="name" placeholder="Ketikkan Nama..." className="input input-bordered input-info w-full max-w-xs"></input>
            <label className="label mt-4" htmlFor="password">
              <span className="label-text">Pekerjaan/Sekolah</span>
            </label>
            <input value={kota} onChange={e => setKota(e.target.value)} type="text" id="kota" placeholder="Ketikkan Pekerjaan/Sekolah..." className="input input-bordered input-info w-full max-w-xs"></input>
            <div className="card-actions justify-center mt-8">
              <input type="submit" value="Masuk" onClick={() => validate()} className="btn btn-primary mx-auto px-32" />
            </div>
            <a href="/register" className="mx-auto mt-4 inline-block">Buat Akun</a>
            <a href="/login" className="mx-auto mt-4 inline-block">Login</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default GuestBook;