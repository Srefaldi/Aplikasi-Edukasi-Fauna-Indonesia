import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TemplateQuiz from './templates/template-quiz';
import axios from 'axios';
const PlayQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const { package: selectedPackage } = useParams();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`${process.env.API_ENDPOINT}/get-quizzes-by-package/${selectedPackage}`);
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [selectedPackage]);


  return (
    <div>

      {quizData.length > 0 ? (
        <TemplateQuiz quizData={quizData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlayQuiz;
