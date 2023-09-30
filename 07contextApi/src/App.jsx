import { useState } from 'react';
import './App.css'
import Card from './Card'
import UserContextProvide from './context/UserContextProvide'
import Login from './Login'
import UserContext from './context/UserContext';

function App() {
  return (
    <UserContextProvide>
      <Login />
      <Card />
    </UserContextProvide>
  )
  // const [data, setData] = useState(null);
  // return (
  //   <UserContext.Provider value={{ data, setData }}>
  //     <Login />
  //     <Card />
  //   </UserContext.Provider>
  // );
}

export default App
