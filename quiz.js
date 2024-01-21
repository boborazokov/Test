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

// Replace the existing questions array with your own set
const questions = [
  {
    question: "What layer of the OSI model is responsible for error detection and correction?",
    options: ["Physical", "Data Link", "Transport", "Presentation"],
    answer: "Data Link"
  },
  {
    question: "Which layer is responsible for logical addressing, such as IP addresses?",
    options: ["Network", "Data Link", "Presentation", "Transport"],
    answer: "Network"
  },
  // Add more questions similarly
  // ..
    {
      question: "What layer of the OSI model is responsible for error detection and correction?",
      options: ["Physical", "Data Link", "Transport", "Presentation"],
      answer: "Data Link"
    },
    {
      question: "Which layer is responsible for logical addressing, such as IP addresses?",
      options: ["Network", "Data Link", "Presentation", "Transport"],
      answer: "Network"
    },
    {
      question: "In the OSI model, where does routing occur?",
      options: ["Network", "Transport", "Data Link", "Physical"],
      answer: "Network"
    },
    {
      question: "At which OSI layer does encryption and decryption take place?",
      options: ["Session", "Presentation", "Transport", "Data Link"],
      answer: "Presentation"
    },
    {
      question: "Which layer is responsible for flow control and error recovery?",
      options: ["Transport", "Network", "Data Link", "Physical"],
      answer: "Transport"
    },
    {
      question: "What is the primary function of the OSI model's Data Link layer?",
      options: ["Error detection and correction", "Physical addressing", "End-to-end communication", "Routing"],
      answer: "Physical addressing"
    },
    {
      question: "In the OSI model, what layer deals with end-to-end communication between applications?",
      options: ["Presentation", "Application", "Session", "Transport"],
      answer: "Application"
    },
    {
      question: "Where does the MAC address operate in the OSI model?",
      options: ["Network", "Data Link", "Transport", "Physical"],
      answer: "Data Link"
    },
    {
      question: "Which layer is responsible for creating, maintaining, and terminating sessions?",
      options: ["Presentation", "Session", "Transport", "Data Link"],
      answer: "Session"
    },
    {
      question: "At which OSI layer does framing occur?",
      options: ["Network", "Presentation", "Data Link", "Physical"],
      answer: "Data Link"
    },
    // Continue adding more questions...
  
  // ... (Previous questions)
  
  // Continue adding more questions...
  {
    question: "What type of delay occurs when a router examines the header of a packet?",
    options: ["Transmission delay", "Processing delay", "Queuing delay", "Propagation delay"],
    answer: "Processing delay"
  },
  {
    question: "Which delay is associated with waiting time in a router's buffer?",
    options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
    answer: "Queuing delay"
  },
  {
    question: "Delay caused by the time it takes for a signal to travel from the source to the destination is known as:",
    options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
    answer: "Propagation delay"
  },
  {
    question: "What delay is introduced due to the time required to convert a packet into the appropriate frame for the transmission medium?",
    options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
    answer: "Transmission delay"
  },
  {
    question: "Which switching type is associated with the use of MAC addresses to make forwarding decisions?",
    options: ["Circuit Switching", "Datagram Switching", "Message Switching", "Packet Switching"],
    answer: "Packet Switching"
  },
  {
    question: "In packet switching, what happens if a network node receives more packets than it can transmit immediately?",
    options: ["Discard excess packets", "Queue the packets", "Route the packets back", "Fragment the packets"],
    answer: "Queue the packets"
  },
  {
    question: "Which switching type establishes a dedicated communication path before data transfer?",
    options: ["Circuit Switching", "Datagram Switching", "Message Switching", "Packet Switching"],
    answer: "Circuit Switching"
  },
  {
    question: "What is a characteristic of Datagram Switching?",
    options: ["Fixed path for communication", "No connection setup phase", "Predefined route for packets", "Virtual circuit establishment"],
    answer: "No connection setup phase"
  },
  {
    question: "Which switching type is connectionless and suitable for bursty data traffic?",
    options: ["Datagram Switching", "Circuit Switching", "Message Switching", "Packet Switching"],
    answer: "Datagram Switching"
  },
  {
    question: "What is a disadvantage of Circuit Switching compared to Packet Switching?",
    options: ["Efficient use of bandwidth", "Variable delay", "Resource reservation", "No connection setup time"],
    answer: "No connection setup time"
  },
  // Continue adding more questions...


]// Shuffle the questions array
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
