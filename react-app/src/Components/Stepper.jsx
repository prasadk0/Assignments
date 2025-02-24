import { Component, useEffect, useState } from "react"

export default function Stepper() {
    const stepper = [
        {
            name: "Personal Details",
            Component: () => "Fill the personal details"
        },
        {
            name: "Eduactional Details",
            Component: () => "Fill the Eduactional details"
        },
        {
            name: "Company Details",
            Component: () => "Fill the Company details"
        },
        {
            name: "Confirm Details",
            Component: () => "Confirm details"
        }
    ]
    const [stepperInfo, setStepperInfo] = useState(stepper);
    const [currentStep, setCurrentStep] = useState(1);
    const [isCompleted, setCompleted] = useState(false);
    const CurrentComponent = stepper[currentStep - 1].Component;
    const [stepperFilledPercentage, setStepperFilledPercentage] = useState(0)
    const clickHandler = () => {
        setCurrentStep((prev) => prev + 1);
        const percentage = ((currentStep) / (stepper.length - 1)) * 100
        setStepperFilledPercentage(percentage)
    }
    useEffect(() => {
        if (currentStep === stepperInfo.length) {
            setCompleted(true);
        }
    }, [currentStep])


    return (
        <div className="">
            <div className="flex flex-row relative  justify-between items-center">
                {
                    stepperInfo.length && stepperInfo.map((ele, index) => {
                        return (
                            <div>
                                <div key={index} className="flex justify-center  items-center flex-col">
                                    <div style={currentStep > (index) ? (currentStep - 1 === index ? { background: "blue" } : { background: "green" }) : {}} className="w-10 h-10 z-20  flex justify-center items-center rounded-full bg-gray-300">{index + 1}</div>
                                    <div>{ele.name}</div>
                                </div>

                            </div>

                        )
                    })


                }
                <div className="absolute h-3.5 w-full top-[25%]  bg-gray-300" >
                    <div style={{ width: `${stepperFilledPercentage}%` }} className={`  bg-green-300 h-full `}>

                    </div>
                </div>

            </div>

            <div className="mt-20 flex justify-center">
                <CurrentComponent />
                <button onClick={clickHandler} className={!isCompleted ? "p-2 border border-gray-300" : "hidden"}>{isCompleted ? 'Finish' : 'Next'}</button>
            </div>
        </div>

    )
}