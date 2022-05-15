import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import supabase from './config/supabase';
import { useNavigate } from 'react-router-dom';
import ProfilePictDefault from './images/plus.svg';
import base64 from 'base-64';

function Profil() {
  const navigate = useNavigate();

  let id = 'efcba67b-8a2f-41ea-8559-1f1f92a289c5';
  const [data, setData] = useState([]);
  const [profilePictBase64, setProfilePictBase64] = useState("");
  const [profilePictTemp, setProfilePictTemp] = useState("");
  const [eventFiles, setEventFiles] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase
      .from('user')
      .select()
      .eq('id', id)
      .single();

    setData(data);
  }

  const fileInput = useRef(null);
  const handleClick = (event) => {
    fileInput.current?.click();
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setProfilePictBase64(reader.result);
    }
    setProfilePictTemp(event.target.files[0]);
    setEventFiles(event.target.files[0]);
  }

  const test = async () => {
    const type = eventFiles.type.split('/');
    const image_file = id + '_' + String(Date.now()) + '.' + type[1];

    const avatarFile = profilePictTemp;
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload('profile_pict/' + image_file, avatarFile, {
        upsert: false
      })

    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
      const { data: dataUpdate, error: errorUpdate } = await supabase
        .from('user')
        .update({ profile_pic_url: 'https://nigkotxzlgcwqsetuctn.supabase.co/storage/v1/object/public/images/profile_pict/' + image_file })
        .eq('id', id);

      if (errorUpdate) {
        console.log(errorUpdate.message);
      } else {
        console.log(dataUpdate);
        navigate('/');
      }

    }
  }


  return (
    <>
      <div className="Container text-black">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20 bg-white">
          <div className="card-body">
            <h2 className="card-title mx-auto">Tambah Foto Profil</h2>
            <div className="avatar">
              <div className="w-20 rounded-full mx-auto mt-6">
                {profilePictTemp ? <img src={profilePictBase64} /> : <button className="w-20 bg-gray-300 p-3"><img className="" src={ProfilePictDefault} /></button>}
              </div>
            </div>
          </div>
          <input
            ref={fileInput}
            onChange={e => handleClick(e)}
            type="file"
            style={{ display: "none" }}
          />
          <button onClick={() => handleClick()} className="btn btn-primary btn-md mx-auto px-16 mb-20">Upload Photo</button>
        </div>
      </div>
      <div className="Container-button flex justify-center">
        <div className="">
          <button onClick={() => test()} className="btn btn-primary btn-md  w-44 my-4 ">Selesai</button><br></br>
          <button className="btn bg-slate-200 btn-md w-44 ">Skip</button>
        </div>
      </div>
    </>
  );
}

export default Profil;