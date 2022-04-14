import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './CustomButton.css';

import { useLocation } from "react-router-dom";
import axios from 'axios';

function CourseDetail() {
  const location = useLocation();
  const [getData, setGetData] = useState([]);
  
  useEffect(() => {
    // console.log('cek data lur', params.state.key);
    console.log(location," useLocation Hook");
  }, [])
  // console.log(props, " props");
  


 return(
    <>


      <section>
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">
            {/* <p>{location.state.key}</p> */}
  {/* {params.state.key != '' &&(<p>{params.state.key}</p>)} */}
                
                </div>
          </div>

      </section>
     
    </>
 );
}

export default CourseDetail;