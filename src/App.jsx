import React from "react"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import './index.css'

function App(){
  return (
    <div className="bg-slate-50">
        <Header/>
      <main>
        <Main/>
      </main>
    </div>
  )
}

export default App;