import { useState } from "react";

export default function QuizApp() {
  const questions = [
    {
      name: "Mumbai is Capital of India",
      options: ["Yes", "No"],
      answer: "No",
    },
    {
      name: "Delhi is Capital of India",
      options: ["Yes", "No"],
      answer: "Yes",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const [completed, setCompleted] = useState();

  const clickHandler = (submittedAns) => {
    setResult([...result, submittedAns]);
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="flex justify-center align-middle w-full ">
    <div>
    <h1 className="bg-yellow-300 text-gray-500 text-2xl text-center px-5 py-2">Quiz APP</h1>
      {!completed ? (
        <div className="p-4 shadow-2xl  w-96">
          <h2 className="px-4 py-2 bg-green-300 ">{questions[currentQuestion].name}</h2>
          <div className="flex flex-row gap-4">
            {questions[currentQuestion].options.map((ele) => {
              return (
                <button className=" p-2 my-4 w-full rounded-md  bg-sky-400 "
                  onClick={() => {
                    clickHandler(ele);
                  }}
                >
                  {ele}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-4 shadow-2xl  w-96" >
          <h1>Test Completed.✔👏</h1>
          <div>
            {questions.map((ele, index) => {
              return (
                <p
                 className="p-2"
                >
                  { ( ele.answer === result[index] ? "👌" : "🤢")+ele.name + "          " + "Answer" }{" "}
                  <span className="p-2 bg-blue-400 rounded-full">{ele.answer}</span>
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
