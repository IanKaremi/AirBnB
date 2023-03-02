import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Hero from './components/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/ >
      <Hero />
     </div>
  )
}

export default App
