import React, { useState, useEffect } from 'react';
import createFaunaDetailTemplate from './templates/template-detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
const DetailPage = () => {
  const { itemName } = useParams();
  const [faunaDetail, setFaunaDetail] = useState(null);
  const [faunaData, setFaunaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/get-fauna/${itemName}`);
        const foundFaunaDetail = response.data;

        if (!foundFaunaDetail) {
          setFaunaDetail('<p>Detail not found</p>');
        } else {
          setFaunaData(foundFaunaDetail); 
          const faunaDetailTemplate = createFaunaDetailTemplate(foundFaunaDetail);
          setFaunaDetail(faunaDetailTemplate);
        }
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };
    fetchData();
  }, [itemName]);
  const imgContainer = {
    width: '100vw',
  };

  return ( 
  <div> 

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={imgContainer} />
          </div>
        </div>
      </div>

    {faunaDetail}
    </div>
  );
};

export default DetailPage;
