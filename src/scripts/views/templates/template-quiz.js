const createQuizTemplate = (quiz) => {
    const { DataQuiz } = quiz;
    let currentQuestionIndex = 0;

    const renderQuestion = (questionData) => {
        const { question, options } = questionData;

        return `
        <div class="container mt-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-10 col-lg-10">
                    <div class="border">
                        <div class="question bg-white p-3 border-bottom">
                            <div class="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>Edukasi Fauna</h4><span>Soal ${currentQuestionIndex + 1} / ${DataQuiz.length}</span>
                            </div>
                        </div>
                        <div class="question bg-white p-3 border-bottom">
                            <div class="d-flex flex-row align-items-center question-title" style="margin-bottom: 15px;">
                                <h5 class="mt-1 ml-2">${question}</h5>
                            </div>
                            <div class="ans ml-2" style="margin-bottom: 10px;">
                                <label class="radio"> <input type="radio" name="answer" value="a"> <span>${options.a}</span></label>    
                            </div>
                            <div class="ans ml-2" style="margin-bottom: 10px;">
                                <label class="radio"> <input type="radio" name="answer" value="b"> <span>${options.b}</span></label>    
                            </div>
                            <div class="ans ml-2" style="margin-bottom: 10px;">
                                <label class="radio"> <input type="radio" name="answer" value="c"> <span>${options.c}</span></label>    
                            </div>
                            <div class="ans ml-2" style="margin-bottom: 10px;">
                                <label class="radio"> <input type="radio" name="answer" value="d"> <span>${options.d}</span></label>    
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                            <button class="btn btn-primary d-flex align-items-center btn-danger" type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Previous</button>
                            <button class="btn btn-primary border-success align-items-center btn-success" type="button" onclick="checkAnswer()">Next<i class="fa fa-angle-right ml-2"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
    const checkAnswer = () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert('Pilih jawaban terlebih dahulu');
            return;
        }

        const userAnswer = selectedAnswer.value;
        const correctAnswer = DataQuiz[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            alert('Jawaban Anda benar!');
        } else {
            alert('Maaf, jawaban Anda salah.');
        }
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < DataQuiz.length - 1) {
            currentQuestionIndex++;
            document.getElementById('quiz-container').innerHTML = renderQuestion(DataQuiz[currentQuestionIndex]);
        } else {
            alert('Ini adalah pertanyaan terakhir!');
        }
    };

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = renderQuestion(DataQuiz[currentQuestionIndex]);

    window.checkAnswer = checkAnswer;
};

export default createQuizTemplate;
