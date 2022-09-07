import './App.css';
import Cart from './components/cart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu carrinho</h1>
        <hr></hr>
      </header>
      <div className='container'>
        <ul>
          <Cart />
          <Cart />
        </ul>
      </div>
      <footer>
        
        <hr></hr>
        <div>
          <h2>Total</h2>
          <spam>R$ 9,55</spam>
        </div>
        <p>Parabéns, sua compra tem frete grátis! (colocar em verde)</p>
        <hr></hr>
        <button> Finalizar compra</button>
      
      </footer>
    </div>
  );
}

export default App;
