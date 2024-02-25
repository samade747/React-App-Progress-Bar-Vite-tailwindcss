import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className='flex justify-center itesm-center flex-col h-80vh'>      
      <div className='flex flex-col items-center justify-center bg-gray-100 w-400 h-300'>


      <div className='p-2 m-2'>
        <input onChange={(e) => setCount(e.target.value)} type="range" value={count} max={100} className='inputRange'  />
        <label>{count}</label>
      </div>

    <div className='flex gap-2 m-2 p-5'>
      <div>
        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
         onClick={() => dec() }><b>-</b></button>
      </div>


      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
         onClick={() => Inc() }><b>+</b></button>
      </div>
      </div>



      </div>  
    </div>
  )
}

export default App
