import './App.css';
import { getPostsByString } from './features/http/httpRequests';
import { useEffect } from 'react';
import NavBar from './containers/NavBar';

function App() {
  useEffect(() => {
    // Uso de la función
    getPostsByString('dog').then(posts => {
      console.log(posts);
    }).catch(error => {
      console.error(error);
    });
  });

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
