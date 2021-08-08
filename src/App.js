import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react'

function App() {
  const dictionaryApi = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    dictionaryApi()
  }, [])

  return (

    < div className="App" >
      <h1>Dictionary</h1>
    </div >
  );
}

export default App;
