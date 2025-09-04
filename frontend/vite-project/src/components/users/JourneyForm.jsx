import React, { useState } from "react";

const questions = [
  {
    id: 1,
    type: "radio",
    question: "What is your Qualification?",
    options: [
      "High School (10th or below)",
      "Higher Secondary (11th - 12th)",
      "Graduate",
      "Postgraduate",
    ],
  },
  {
    id: 2,
    type: "radio",
    question: "How well do you speak English?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 3,
    type: "radio",
    question: "How well are your English Listening Skills?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 4,
    type: "radio",
    question: "How well can you read and understand complex paragraphs?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 5,
    type: "radio",
    question: "How do you rate your Body Language & Posture?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 6,
    type: "radio",
    question: "How do you rate your Voice & Clarity?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 7,
    type: "radio",
    question: "How are your English Grammar Skills?",
    options: ["Very Poor", "Poor", "Good", "Better", "Excellent"],
  },
  {
    id: 8,
    type: "checkbox",
    question:
      "Which areas are weak for you and need special attention? (Select multiple)",
    options: [
      "Body Language",
      "Speaking",
      "Reading",
      "Interpersonal Communication",
      "Writing",
      "Grammar",
      "Public Speaking",
      "Presentation",
      "Interviews",
      "Q&A",
    ],
  },
];

const JourneyForm = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option) => {
    const q = questions[current];
    if (q.type === "radio") {
      setAnswers({ ...answers, [q.id]: option });
    } else if (q.type === "checkbox") {
      const prev = answers[q.id] || [];
      if (prev.includes(option)) {
        setAnswers({ ...answers, [q.id]: prev.filter((o) => o !== option) });
      } else {
        setAnswers({ ...answers, [q.id]: [...prev, option] });
      }
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Show contact form instead of submitting
      setShowContactForm(true);
    }
  };

  const handleContactSubmit = async () => {

    const mappedData = {
      name: contact.name,
      phone: contact.phone,
      qualification: answers[1], // Q1
      speaking: answers[2],      // Q2
      listening: answers[3],     // Q3
      reading: answers[4],       // Q4
      bodyLanguage: answers[5],  // Q5
      vocals: answers[6],        // Q6
      grammar: answers[7],       // Q7
      weakAreas: answers[8] || [] // Q8 (checkbox)
    };

    try {
      await fetch("http://localhost:9001/user/studentAbility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mappedData),
      });
      console.log(mappedData, "Data Sent to Backend ✅");
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting:", err);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-700">
            🎉 Thank You, {contact.name}!
          </h2>
          <p className="mt-4 text-gray-700">
            We will reach you as soon as possible. <br />
            Hang in there — you have made the right decision. 🚀
          </p>
        </div>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-6">Please provide your details</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleContactSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        {/* Progress */}
        <div className="mb-4 text-sm text-gray-500">
          Question {current + 1} of {questions.length}
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type={q.type}
                name={`question-${q.id}`}
                value={option}
                checked={
                  q.type === "radio"
                    ? answers[q.id] === option
                    : answers[q.id]?.includes(option)
                }
                onChange={() => handleAnswer(option)}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full"
        >
          {current === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default JourneyForm;
