import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
  const [count2, setCount2] = useState(0)




  const date = new Date()
  const getDate = date.setDate(date.getDate() + count2)
  const convertdate = date.toDateString()


  return (
    <div className='flex justify-center itesm-center flex-col h-80vh'>      
      <div className='flex flex-col items-center justify-center bg-gray-100 w-400 h-300'>


      <div className='p-2 m-2 bg-black text-white hover:bg-gray-100 hover:text-black'>
        <input onChange={(e) => setCounter(e.target.value)} type="range" value={counter} max={100} className='inputRange'  />
        <label>{counter}</label>
      </div>

    <div className='flex gap-2 m-2 p-5 bg-black hover:bg-gray-100'>
      <div>
        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
         onClick={() => dec() }><b>-</b></button>
      </div>

    <input type="number" value={count2 == 0 ? counter : count2} />


      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
         onClick={() => Inc() }><b>+</b></button>
      </div>
    </div>

      </div>  

      <div className='bg-black text-white' style={{fontSize: "30px", fontWeight: "50px"}}>
        {count2 == 0 ?`today is `+ convertdate: `${count2} days from today is `+ convertdate }
      </div>


    </div>
  )
}

export default App
