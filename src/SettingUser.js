import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid';
import './CustomButton.css';


function SettingUser() {
  useEffect(() => {
  }, [])

  return (
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
                <li><a>Hi, Ardi!
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                  </div>
                </a> </li>
              </ul>
            </div>
          </div>
        </div> {/* end of top bar */}
      </section>

      <section>
        <div className="container my-40 mx-20 mr-20 ">
          <div className="flex flex-row pl-10 pt-10 pr-10 mb-20 justify-center">
            <img src="https://api.lorem.space/image/face?hash=92310" className="profilepic" />
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold px-10 text-3xl font-normal">Fahmi Ardi Pratama</span>
              <span className="text-lg px-10 mt-3 font-bold text-xl">fahamiardi@gmail.com</span>
            </div>
            <div className="flex row ml-60 mt-10">
              <button class="btn btn-md  md:btn-md btn-primary">Wishlist</button>
              <button class="ml-5 btn btn-md  md:btn-md bg-FF186B">Logout</button>
            </div>
          </div>

          <div className="card mx-auto w-95 lg:card-side bg-base-100 drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
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
                  <td className="mb-5">
                    Tangerang Selatan
                  </td>
                  <td>
                    12 April 2001
                  </td>
                  <td>
                    SMA
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
                  <td>
                    Laki - laki
                  </td>
                  <td>
                    0821 7880 2191
                  </td>
                </tr>
              </table>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Ubah Profil</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}


export default SettingUser