
import './App.css'
import Card from './components/Card'

function App() {
  const zipko = {
    bac: "kasjhdfhsfd",
    klj: "askdjhfhash"
  }

  const obj = {
    btntxt: "click",
    imgLink: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  }
  const obj2 = {
    btntxt: "visit",
    imgLink: "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  }
  const abc = "jjkkd"

  return (
    <>
      <div className="m-5 p-4 flex flex-row justify-around">
        <Card abc={abc} yoyo={[2, 4, 5, 6, 7]} {...zipko} />
        <Card btntxt={obj.btntxt} imgLink={obj.imgLink} />
        <Card btntxt={obj2.btntxt} imgLink={obj2.imgLink} />
      </div>
      <h1 className="text-3xl font-bold bg-green-400 rounded-xl" >Tailwind App</h1>
    </>
  )
}

export default App
