import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import supabase from './config/supabase';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, TOKEN } from './redux/StoreItem';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeItem = useSelector(state => state);
  const [getData, setGetData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [session, setSession] = useState("");
  const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // const session = supabase.auth.session()
    // console.log('satu', session);
    // console.log(storeItem.token == session.access_token ? 'masih aktif' : 'expired cuk');
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
  }

  const validate = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    })

    if (error) {
      console.log('error', error);
      setErrorMessage(error.message);
      setAlert(true);

    } else {
      console.log('tes', session);
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
      //     // navigate('/profil', { state: { fullname: fullname, kota: kota, email: email, password: password } });
    }
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">

          <div className="card-body">
            <h1 className="card-title mx-auto my-4">Login</h1>
            {alert && (
              <div className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p className="text-xs">{errorMessage},<br />Harap cek link verifikasi di emailmu!</p>
              </div>
            )}
            <label className="label" htmlFor="username">
              <span className="label-text">Email</span>
            </label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="username" placeholder="Ketikkan Email" className="input input-bordered input-info w-full max-w-xs"></input>
            <label className="label mt-4" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Ketikkan Password" className="input input-bordered input-info w-full max-w-xs"></input>
            <div className="card-actions justify-center mt-8">
              <input type="submit" value="Masuk" onClick={() => validate()} className="btn btn-primary mx-auto px-32" />
            </div>
            <a href="/register" className="mx-auto mt-4">Buat Akun</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;