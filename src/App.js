import { useState } from 'react'
import './App.css';

function App() {

  const [novaCor, setNovaCor] = useState('bg-vermelho')

  const alterarCor = () => {

    if(novaCor === 'bg-vermelho') {
      setNovaCor('bg-azul')
    } else {
      setNovaCor('bg-vermelho')
    }
  }

  return (

    <div className='container'>
      <div className="App">

        <h2>Alterando estilo do elemento</h2>

        <div className={novaCor}></div>

        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <div className='botao'>
          <button onClick={alterarCor}>Alterar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
