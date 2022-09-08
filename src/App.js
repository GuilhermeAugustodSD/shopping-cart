import './App.css';
import Cart from './components/cart.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu carrinho</h1>
        <hr></hr>
      </header>
      <div className='container'>
        <ul>
          <Cart image='http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000'
            nameProduct='Trufa de tradicional' />
          <Cart image='http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000'
            nameProduct='Trufa de morango' />
          <Cart image='http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000'
            nameProduct='Trufa meio amarga' />
          <Cart image='http://codeby.vteximg.com.br/arquivos/ids/159957-800-1029/trufa-coco.png?v=636929369885800000'
            nameProduct='Trufa de coco' />
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
