const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Shuffle function to randomize array order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions array
const shuffledQuestions = shuffleArray(questions);

let currentQuestionIndex = 0;
let score = 0;

function buildQuiz() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const questionElement = document.createElement('div');
  questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'quiz-option';
    optionElement.innerHTML = `<input type="radio" name="question" value="${option}" id="option${index}"><label for="option${index}">${option}</label>`;
    questionElement.appendChild(optionElement);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
}

function showResults() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  
  if (selectedOption) {
    const answerIsCorrect = selectedOption.value === shuffledQuestions[currentQuestionIndex].answer;

    if (answerIsCorrect) {
      score++;
    }

    displayResultFeedback(answerIsCorrect);

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      setTimeout(() => {
        buildQuiz();
      }, 1000); // Delay before displaying the next question
    } else {
      setTimeout(() => {
        displayResults();
      }, 1000); // Delay before displaying final results
    }
  } else {
    alert('Please select an option.');
  }
}

function displayResultFeedback(answerIsCorrect) {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  const parentDiv = selectedOption.parentNode;

  if (answerIsCorrect) {
    parentDiv.style.backgroundColor = '#8BC34A'; // Green color for correct answer
  } else {
    parentDiv.style.backgroundColor = '#FF5722'; // Red color for incorrect answer
    // Highlight the correct answer
    const correctOption = Array.from(parentDiv.parentNode.children).find(child => child.textContent.includes(shuffledQuestions[currentQuestionIndex].answer));
    if (correctOption) {
      correctOption.style.backgroundColor = '#8BC34A';
    }
  }

  // Disable further selections
  const options = document.querySelectorAll('input[name="question"]');
  options.forEach(option => {
    option.disabled = true;
  });
}

function displayResults() {
  const totalQuestions = shuffledQuestions.length;

  resultsContainer.innerHTML = `
    <p>Your Score: ${score} out of ${totalQuestions}</p>
    <p>Correct Answers: ${score}</p>
    <p>Incorrect Answers: ${totalQuestions - score}</p>
  `;

  quizContainer.innerHTML = '';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
