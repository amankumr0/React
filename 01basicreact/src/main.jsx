import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


function App() {
  return (
    <>
      <div className="card">
        <h1>This is React</h1>
      </div>
    </>
  )
}
const name = "Aman"


const Element = React.createElement("a", { href: "https://www.google.com", title: "an" }, "click", name)


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    Element
  )
