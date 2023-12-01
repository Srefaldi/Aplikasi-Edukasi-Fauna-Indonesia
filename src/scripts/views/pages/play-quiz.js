import createQuizTemplate from '../templates/template-quiz';

const PlayQuiz = {
  imagePaths: [
    '/images/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg'
  ],
  async render() {
    try {
      const response = await fetch('/data/data-quiz.json');
      const quizData = await response.json();

      return `
        <div class="container-fluid px-0"> 
          <div class="row mx-0"> 
            <div class="col-lg-12 px-0"> 
              <img id="homeImage" class="img-fluid" src="${this.imagePaths[0]}" alt="Foto Home" style="width: 100vw;">
            </div>
          </div>
        </div>
        <div id="quiz-container" class="container"></div>
      `;
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  },

  async afterRender() {
    const response = await fetch('/data/data-quiz.json');
    const quizData = await response.json();
    createQuizTemplate(quizData); 
  },
};

export default PlayQuiz;
