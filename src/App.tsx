import { useState } from "react";
import MainPage from "./pages/MainPage";
import { Color } from "./store/context";
const App: React.FC=()=>{
  const [color,setColor]=useState("#6d8d8e")
  return ( 
  <Color.Provider value={{color,setColor}}>
    <MainPage/>
  </Color.Provider>
  )
}


export default App;
