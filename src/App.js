import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import { createContext, useState } from 'react';

export const ClimaContext = createContext({})
function App() 
{
  const [clima, setClima] = useState({pais: 'AR'})
  var currentTime = new Date();
  return (
    <div className="App">
      <ClimaContext.Provider value={clima}>
      <nav>
        <Header date={currentTime}></Header>
      </nav>
      <div className='contenedor-form'>
        <div className='container'>
          <div className="row">
            <Form setClima={setClima}></Form>
            
              <Clima></Clima>
            
          </div>
        </div>

      </div>
      </ClimaContext.Provider>
    </div>
  );
}

export default App;
