import { useState, useEffect, useCallback, useRef } from 'react'

function App() {

  const [password, setPasssword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [specialCharAllow, setspecialCharAllow] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef?.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let str = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) chars += "123456789"
    if (specialCharAllow) chars += "`!@#$%^&*(){}[]"
    for (let i = 1; i < length; i++) {
      let index = Math.floor(Math.random() * chars.length + 1)
      str += chars.charAt(index)
    }
    setPasssword(str)
  }, [length, numberAllow, specialCharAllow, setPasssword])

  useEffect(() => {
    passwordGenerator();
  }, [length, specialCharAllow, numberAllow, passwordGenerator])



  return (
    <div className="w-full shadow-md mx-auto max-w-3xl  bg-gray-700 px-4 my-60 rounded-lg py-5 ">
      <h1 className="text-white text-center text-2xl py-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 w-auto">
        <input
          className="outline-none w-full py-1 px-3 text-2xl"
          type="text"
          placeholder="PASSWORD"
          id="inp"
          value={password}
          ref={passwordRef}
          readOnly />
        <button
          onClick={copyToClipBoard}
          className="shrink-0 p-4 px-7 bg-blue-600 rounded-r-lg text-white text-2xl font-normal">
          Copy
        </button>
      </div>
      <div className="flex items-center gap-x-2 text-orange-500 text-2xl pb-4">
        <div className="flex items-center gap-x-1">
          <input
            onChange={(e) => { setLength(e.target.value) }}
            className="outline-none cursor-pointer"
            type="range"
            name="rang-in"
            id="inp-rng"
            value={length}
            max={18}
            min={8} />
          <label htmlFor="inp-rng" className="px-4">
            Length: {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            onChange={() => { setNumberAllow((prev) => !prev) }}
            className="outline-none"
            type="checkbox"
            name="num-allow"
            id="inp-num"
            defaultChecked={numberAllow} />
          <label htmlFor="inp-num" className="px-2">
            Number Allowed
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            onChange={() => { setspecialCharAllow((prev) => !prev) }}
            className="outline-none"
            type="checkbox"
            name="char-allow"
            id="inp-chr"
            defaultChecked={specialCharAllow}
          />
          <label htmlFor="inp-chr" className="px-2">
            Special Character
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
