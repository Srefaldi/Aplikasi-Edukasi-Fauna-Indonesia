import React, { useState, useEffect } from 'react';
import createFaunaDetailTemplate from './templates/template-detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { itemName } = useParams();
  const [faunaDetail, setFaunaDetail] = useState(null);
  const [faunaData, setFaunaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.API_ENDPOINT}/get-fauna/${itemName}`);
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


    {faunaDetail}
    </div>
  );
};

export default DetailPage;
