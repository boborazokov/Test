const questions = [
  {
    question: "What layer of the OSI model is responsible for error detection and correction?",
    options: ["Physical", "Data Link", "Transport", "Presentation"],
    answer: "B"
  },
  {
    question: "Which layer is responsible for logical addressing, such as IP addresses?",
    options: ["Network", "Data Link", "Presentation", "Transport"],
    answer: "A"
  },
  {
    question: "In the OSI model, where does routing occur?",
    options: ["Network", "Transport", "Data Link", "Physical"],
    answer: "A"
  },
  {
    question: "At which OSI layer does encryption and decryption take place?",
    options: ["Session", "Presentation", "Transport", "Data Link"],
    answer: "B"
  },
  {
    question: "Which layer is responsible for flow control and error recovery?",
    options: ["Transport", "Network", "Data Link", "Physical"],
    answer: "A"
  },
  {
    question: "What is the primary function of the OSI model's Data Link layer?",
    options: ["Error detection and correction", "Physical addressing", "End-to-end communication", "Routing"],
    answer: "B"
  },
  {
    question: "In the OSI model, what layer deals with end-to-end communication between applications?",
    options: ["Presentation", "Application", "Session", "Transport"],
    answer: "B"
  },
  {
    question: "Where does the MAC address operate in the OSI model?",
    options: ["Network", "Data Link", "Transport", "Physical"],
    answer: "B"
  },
  {
    question: "Which layer is responsible for creating, maintaining, and terminating sessions?",
    options: ["Presentation", "Session", "Transport", "Data Link"],
    answer: "B"
  },
  {
    question: "At which OSI layer does framing occur?",
    options: ["Network", "Presentation", "Data Link", "Physical"],
    answer: "C"
  },
  // Continue adding more questions...

// ... (Previous questions)

// Continue adding more questions...
{
  question: "What type of delay occurs when a router examines the header of a packet?",
  options: ["Transmission delay", "Processing delay", "Queuing delay", "Propagation delay"],
  answer: "B"
},
{
  question: "Which delay is associated with waiting time in a router's buffer?",
  options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
  answer: "C"
},
{
  question: "Delay caused by the time it takes for a signal to travel from the source to the destination is known as:",
  options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
  answer: "B"
},
{
  question: "What delay is introduced due to the time required to convert a packet into the appropriate frame for the transmission medium?",
  options: ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
  answer: "A"
},
{
  question: "Which switching type is associated with the use of MAC addresses to make forwarding decisions?",
  options: ["Circuit Switching", "Datagram Switching", "Message Switching", "Packet Switching"],
  answer: "D"
},
{
  question: "In packet switching, what happens if a network node receives more packets than it can transmit immediately?",
  options: ["Discard excess packets", "Queue the packets", "Route the packets back", "Fragment the packets"],
  answer: "B"
},
{
  question: "Which switching type establishes a dedicated communication path before data transfer?",
  options: ["Circuit Switching", "Datagram Switching", "Message Switching", "Packet Switching"],
  answer: "A"
},
{
  question: "What is a characteristic of Datagram Switching?",
  options: ["Fixed path for communication", "No connection setup phase", "Predefined route for packets", "Virtual circuit establishment"],
  answer: "B"
},
{
  question: "Which switching type is connectionless and suitable for bursty data traffic?",
  options: ["Datagram Switching", "Circuit Switching", "Message Switching", "Packet Switching"],
  answer: "A"
},
{
  question: "What is a disadvantage of Circuit Switching compared to Packet Switching?",
  options: ["Efficient use of bandwidth", "Variable delay", "Resource reservation", "No connection setup time"],
  answer: "D"
},
// Continue adding more questions...
]