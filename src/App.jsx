import { useState } from 'react'
import './App.css'
import{Link}from'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to frontend class in klu</h1>
      <h2> Today's topic is Introduction to React</h2>
      <h3>Today's date is 29.07.25</h3>
      <h4>2400031126-Yasasri</h4>
      <Link to="/page1">Go To Page1</Link>
      <br/><br/>
      <Link to="/page2">Go To Page2</Link>
            <br/><br/>
      <Link to="/page3">Go To Page3</Link>
                  <br/><br/>
      <Link to="/page4">Go To Page4</Link>
    </>
  )
}

export default App
