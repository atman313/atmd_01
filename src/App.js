import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Carousel</h5>
      <Carousel infinite timer={3500}>
        <img src="/images/Sale1.jpg" alt="" />
        <img src="/images/Store1.jpg" alt="" />
        <img src="/images/Dress1.jpg" alt="" />
        <img src="/images/Jeans1.jpg" alt="" />
        <img src="/images/Shoes2.jpg" alt="" />
        <img src="/images/Store2.jpg" alt="" />
        <img src="/images/MensClothes1.jpg" alt="" />
        <img src="/images/Shoes3.jpg" alt="" />
        <img src="/images/WomensClothes1.jpg" alt="" />
        <img src="/images/Shoes1.jpg" alt="" />
      </Carousel>
    </div>
  );
}

export default App;
