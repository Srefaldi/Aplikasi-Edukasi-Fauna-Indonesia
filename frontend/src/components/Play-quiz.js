import React, { useEffect, useState } from 'react';
import TemplateQuiz from './templates/template-quiz';
import hero from '../css/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';

const PlayQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const imgContainer = {
    width: '100vw',
};
  useEffect(() => {
    async function fetchQuizData() {
      try {
        const response = await fetch('/data/data-quiz.json');
        const data = await response.json();
        setQuizData(data.DataQuiz);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    }

    fetchQuizData();
  }, []);

  return (
    <div>
       <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col-lg-12 px-0">
                <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={imgContainer} />
            </div>
          </div>
    </div>

      {quizData.length > 0 ? (
        <TemplateQuiz quizData={quizData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlayQuiz;
