import './App.css';
import Cart from './components/cart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Carrinho</h1>
        <hr></hr>
      </header>
      <div className='container'>
        <ul>
          <Cart />
        </ul>
      </div>
    </div>
  );
}

export default App;
