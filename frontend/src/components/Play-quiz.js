import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TemplateQuiz from './templates/template-quiz';
import axios from 'axios';
import hero from '../css/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';

const PlayQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const { package: selectedPackage } = useParams();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/get-quizzes-by-package/${selectedPackage}`);
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [selectedPackage]);

  return (
    <div>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" />
          </div>
        </div>
      </div>

      {/* Pastikan struktur data yang diterima dari API sesuai */}
      {quizData.length > 0 ? (
        <TemplateQuiz quizData={quizData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlayQuiz;
