import { useState } from 'react'
import './App.css'
import Quotebox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import color from './utils/color'

function App() {
  // Esta función clacula un indice random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  // Aqui se extrae el elemento segun el índice random
  const firstElement = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setrandomQuote] = useState(firstElement)
  const [randomColor, setrandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }
  

  // Esta función calcula la frese y el color random
  const getRandomAll = () =>{
   setrandomQuote(quotes[getIndexRandom(quotes)])
   setrandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <Quotebox 
        randomQuote ={randomQuote}
        randomColor ={randomColor}
        getRandomAll ={getRandomAll}
      />
    </div>
  )
}

export default App
