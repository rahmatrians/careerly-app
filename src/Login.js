import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import supabase from './config/supabase';

function Login() {
  const navigate = useNavigate();
  const [getData, setGetData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
  }


  const validate = async () => {
    const { data: emailId, count: countId } = await supabase
      .from('user')
      .select('id', { count: 'exact' })
      .eq('email', email);

    if (countId == 1) {
      const { data, error, count } = await supabase
        .from('user')
        .select('*', { count: 'exact' })
        .match({ id: emailId[0].id, password: password })
        .single();

      if (count != 1) {
        console.log(error.message);
      } else {
        navigate('/');
        // navigate('/profil', { state: { fullname: fullname, kota: kota, email: email, password: password } });
      }
    }
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">

          <div className="card-body">
            <h1 className="card-title mx-auto my-8">Login</h1>
            <label className="label" htmlFor="username">
              <span className="label-text">Email</span>
            </label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="username" placeholder="Ketikkan Email" className="input input-bordered input-info w-full max-w-xs"></input>
            <label className="label mt-4" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Ketikkan Password" className="input input-bordered input-info w-full max-w-xs"></input>
            <div className="card-actions justify-center mt-8">
              <input type="submit" value="Masuk" className="btn btn-primary mx-auto px-32" />
            </div>
            <a href="/register" className="mx-auto mt-4">Buat Akun</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;