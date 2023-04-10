import logo from './logo.svg';
import './App.css';
import hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    <button className="btn btn-primary">Button</button>
    
    </div>
  );
}

export default App;