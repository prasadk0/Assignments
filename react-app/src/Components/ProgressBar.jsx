import { useEffect, useState } from "react"

export default function ProgressBar({ value = 0 }) {
   const [percent,setPercent] = useState(value);
   useEffect(()=>{
   setPercent(Math.min(100,Math.max(value,0)));
   },[value])
    return (
        <div className=" relative rounded-2xl h-11 justify-baseline  border border-gray-400 w-60  bg-gray-300 flex overflow-hidden "  style={{ "--progress": `${percent}%` }}>
                 <span className="absolute inset-0 w-full flex justify-center items-center">{percent.toFixed()}%</span>
                <div  className={`bg-green-500 progress-fill`} ></div>
        </div>
    )
}