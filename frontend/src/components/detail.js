import React, { useState, useEffect } from 'react';
import createFaunaDetailTemplate from './templates/template-detail';
import { useParams } from 'react-router-dom';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';

const DetailPage = () => {
  const { itemName } = useParams();
  const [faunaData, setFaunaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data-fauna.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setFaunaData(data.faunaData);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };
    fetchData();
  }, []);

  const [faunaDetail, setFaunaDetail] = useState(null);

  useEffect(() => {
    const foundFaunaDetail = faunaData.find(
      (item) => item.nama.toLowerCase() === itemName.toLowerCase()
    );

    if (!foundFaunaDetail) {
      setFaunaDetail('<p>Detail not found</p>');
    } else {
      const faunaDetailTemplate = createFaunaDetailTemplate(foundFaunaDetail);
      setFaunaDetail(faunaDetailTemplate);
    }
  }, [faunaData, itemName]);
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
