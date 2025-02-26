import { useState } from "react"

export default function QuizApp() {
    const questions = [
        {
            name: "Mumbai is Capital of India",
            options: [
                "Yes",
                "No"
            ],
            answer: "No"
        },
        {
            name: "Delhi is Capital of India",
            options: [
                "Yes",
                "No"
            ],
            answer: "Yes"
        }

    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [result, setResult] = useState([]);
    const [completed, setCompleted] = useState();

    const clickHandler = (submittedAns) => {
        setResult([...result, submittedAns]);
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            setCompleted(true)
        }
    }

    return (
        <>
            <h1>Quiz APP</h1>
            {!completed ?
                <div>
                    <h2>{questions[currentQuestion].name}</h2>
                    <div className="flex flex-row">
                        {questions[currentQuestion].options.map((ele) => {
                            return (
                                <button onClick={() => { clickHandler(ele) }}>
                                    {ele}
                                </button>
                            )
                        })
                        }
                    </div>
                </div>
                : <div>
                    <h1>Test Completed.✔👏</h1>
                    <div>




    {
                            questions.map((ele, index) => {
                                return (
                                    <p className={ele.answer === result[index] ? 'bg-green-300' : 'bg-red-300'}>{ele.name + '          ' + 'Answer' + ele.answer}  </p>
                                )
                            })
                        }
                    </div>
                </div>
            }


        </>
    )
}