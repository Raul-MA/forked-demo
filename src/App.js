import logo from './logo.svg'
import './App.css'
import ForkNewComponent from './ForkNewComponent/ForkNewComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ForkNewComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          El texto debe de cambiar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
