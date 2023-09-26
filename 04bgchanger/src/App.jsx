import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#f9a8d4");
  return (
    <div className="flex justify-center wrapper w-screen h-screen" style={{ background: color }}>
      <div className="flex justify-center bottom-10 rounded-xl absolute  p-5 bg-black">
        <button onClick={() => setColor("#f9a8d4")} className=" bg-pink-300 rounded-lg px-5 py-1 mx-1 font-bold text-white uppercase" >pink</button>
        <button onClick={() => setColor("#4ade80")} className="bg-green-400 rounded-lg px-5 py-1 mx-1 font-bold text-white uppercase" >green</button>
        <button onClick={() => setColor("#a78bfa")} className=" bg-violet-400 rounded-lg px-5 py-1 mx-1 font-bold text-white uppercase" >violet</button>
        <button onClick={() => setColor("#808000")} className="rounded-lg px-5 py-1 mx-1 font-bold text-white uppercase" style={{ background: "olive" }} >olive</button>
        <button onClick={() => setColor("#fde047")} className=" bg-yellow-300 rounded-lg px-5 py-1 mx-1 font-bold text-white uppercase" >yellow</button>
      </div>
    </div >
  )
}
export default App
