import './App.css';
import Home from './Home';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
function App() {
  return (
    <>
     <Home/>
      <ImageSlider slides={SliderData} />;
      <Footer/>
    </>
  );
}

export default App;
