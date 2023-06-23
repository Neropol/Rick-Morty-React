import ImageRickMorty from './img/rick-morty.png';
import Characters from './components/characters.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    try {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const carataterApi = await api.json();
      setCharacters(carataterApi.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={ImageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
