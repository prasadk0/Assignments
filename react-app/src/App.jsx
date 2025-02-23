import './App.css'
import ProgressBar from './Components/ProgressBar'
import { useState,useEffect } from 'react';
function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
      setInterval(() => {
          setValue(prev => prev + 1);
      }, 1000)
    
  }, [])
  return (
    <>
    {/* <ProgressBar value={value} /> */}
    </>
  )
}

export default App
