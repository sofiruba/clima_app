import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import { createContext, useState } from 'react';

export const ClimaContext = createContext({})
function App() {

  const [clima, setClima] = useState({pais: 'AR', ciudad: 'buenos aires'})
  return (
    <div className="App">
      <nav>
        <Header></Header>
      </nav>
      <div className='contenedor-form'>
        <div className='container'>
          <div className="row">
            <Form setClima={setClima}></Form>
            <ClimaContext.Provider value={clima}>
              <Clima></Clima>
            </ClimaContext.Provider>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
