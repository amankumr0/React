import { useState } from 'react'
import './App.css'

function App() {

  const date = new Date(Date.now());
  let hours = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();
  if (hours > 12) hours = hours - 12;
  if (hours == 0) hours = 12;
  let time = hours + ':' + minute + ":" + sec

  setInterval(() => {
    const date = new Date(Date.now());
    let hours = date.getHours();
    let minute = date.getMinutes();
    date.get
    let sec = date.getSeconds();
    if (hours > 12) hours = hours - 12;
    if (hours == 0) hours = 12;
    let time = hours + ':' + minute + ":" + sec
    setCount(time);
  })

  let [count, setCount] = useState(time);

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
    </>
  )
}

export default App
