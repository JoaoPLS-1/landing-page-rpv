import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState<number>(0)
  const [resultado, setResultado] = useState("par")

  //Criar um novo estado, para verificar se o valor de cont é par ou impar
  //imprimir PAR ou IMPAR na tela!
  return (
    <>
      <button onClick={() => {
        setCount((oldstate) => oldstate + 1)
        const countAtual = count + 1
        setResultado(countAtual % 2 === 0 ? "par" : "impar")
      }}>
        count is {count}

      </button>
      <p>{resultado}</p>
    </>
  )
}

export default App

