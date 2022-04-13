import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

function Login() {
  useEffect(() => {
  }, [])

  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-40">

      <div className="card-body">
        <h1 className="card-title mx-auto my-8">Login</h1>
        <label className="label" htmlFor="username">
          <span className="label-text">Username</span>
        </label>
        <input type="text" id="username" placeholder="Ketikkan Email" className="input input-bordered input-info w-full max-w-xs"></input>
        <label className="label mt-4" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input type="password" id="password" placeholder="Ketikkan Password" className="input input-bordered input-info w-full max-w-xs"></input>
        <div className="card-actions justify-center mt-8">
          <button className="btn btn-primary mx-auto px-32">Masuk</button>
        </div>
          <a href="" className="mx-auto mt-4">Buat Akun</a>
      </div>
    </div>
    </>
  );
}

export default Login;