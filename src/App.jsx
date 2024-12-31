import { useState } from 'react'

function App() {
  const ct = "text-center text-green-800"
  const info = "Kevin Oficial"
  return (
    <>
    <header className="bg-blue-900 w-100">
      <h1 className="text-center">Meu site</h1>
    </header>

    <section className="flex justify-center flex-wrap">
      <div className="bg-blue-500 rounded box"></div>
      <div className="bg-blue-500 rounded box"></div>
    </section>
    <br></br>
    <h1 className={ct}>{info}</h1>
    </>
  )
}

export default App
