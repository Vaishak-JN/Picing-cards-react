import Card from './Card';
import "./style.css"
import cardData from './cardData';

function App() {
  return (
    <div className="App home">
      {cardData.map((data) => <Card plan={data.plan} price={data.price} features={data.features} />)}
    </div>
  );
}

export default App;
