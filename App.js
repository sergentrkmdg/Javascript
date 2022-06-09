import logo from './logo.svg';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import useFetch from './hooks/useFetch';

function App() {
  const { width, height } = useWindowSize()
  const {data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/todos/1')
 
  return (
    <div className="App">
      <header className="App-header">
      {width>800 && <img src={logo} className="App-logo" alt="logo" />}
      {width} / {height}
        <p>
          Hello World
        </p>
        <div>
          <p>Hata:{JSON.stringify(error)}</p>
          <p>Loading:{JSON.stringify(loading)}</p>
          <p>Data:{JSON.stringify(data)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
