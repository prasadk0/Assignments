import { useEffect, useState } from "react"
// setState is asnychronouse function
export default  function DynamicSize(){
    const [size,setSize] = useState({width:window.innerWidth,height:window.innerHeight});
    useEffect(()=>{
    const resizeHandler = (e)=>{
    setSize({width:window.innerWidth,height:window.innerHeight})
    console.log(window.innerHeight,innerWidth);
    }
    window.addEventListener('resize',resizeHandler);
    return ()=> window.removeEventListener('resize',resizeHandler);
    },[])


    return(
        <div style={{width:`${size.width}px`,height:`${size.height}px`}}  className={`bg-yellow-300 border border-gray-300`}>

        </div>
    )
}