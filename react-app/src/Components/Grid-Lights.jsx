import { useEffect, useState } from "react"

export default function GridLights(){
    const config =[
        [1,0,1],
        [1,1,0],
        [0,1,0]
    ]
    const [onLightsCount,setOnLights] = useState(5)
    const [configArr,setConfigArr] =useState(config);
    const [stack,setStack] = useState(new Map())
    const  setConfigArrHandler =(outerIndex,innerIndex)=>{
      return ()=>{
       const newStack = structuredClone(configArr);
       const key = `${outerIndex}-${innerIndex}`
       if(newStack.get(key) || !config[outerIndex][innerIndex]){
        return;
       }else{
        newStack.set(key,true);
       }
       setStack(newStack);
       if(onLightsCount===0){
        rollback()
       }
      }
    }

    const rollback = ()=>{
        const interval =  setInterval(() => {
           setStack(function(prev){
            const lastKey  =  Array.from(prev.keys).pop();
            const newStack = structuredClone(prev);
            newStack.delete(lastKey);
            if(!newStack.size){
                clearInterval()
            }
            return newStack;
           }) 
        }, 2000);
    }
    return (
        <div className="grid grid-cols-3 gap-4">
              {
                configArr.map((ele,index)=>{
                 return   ele.map((innerEle,innerIndex)=>{
                        return (
                            <p onClick={()=>{innerEle && setConfigArrHandler(index,innerIndex) }} className={innerEle===1 ? 'p-2 bg-green-400 ' : 'p-2 bg-gray-500'}></p>
                        )
                    })
                })

              }
        </div>
    )
}