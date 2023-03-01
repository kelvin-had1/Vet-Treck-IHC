import { useState } from 'react'
// import reactLogo from '../../assets/react-logo.svg'
import reactLogo from '../../assets/react.svg'
import '../../styles/App.css'
import { Button } from '../../components/Button/Button'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={count} onClick={()=> setCount(count + 1)}/>        
      </div>
      
    </div>
  )
}

export { Home }
