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
    console.log(location.state," useLocation Hook");
  }, [])
  
  
  const testAja = async () => {
    await axios.post('http://localhost:8000/jobs/detail', {
      data: location.state
    })
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/jobs/detail',
    //   data: {
    //     firstName: 'Finn',
    //     lastName: 'Williams'
    //   }
    // })
    .then((response) => {
      console.log('test',response.data);
    }, (error) => {
      console.log(error);
    });
  }
  


 return(
    <>


      <section>
      <div className="container mx-auto mt-32">
            <div className="grid grid-cols-3 gap-x-12 gap-y-20 mx-28">
              <button className="btn btn-primary" onClick={() => testAja()}>Test</button>
            {/* <p>{location.state.key}</p> */}
  {/* {params.state.key != '' &&(<p>{params.state.key}</p>)} */}
                
                </div>
          </div>

      </section>
     
    </>
 );
}

export default CourseDetail;