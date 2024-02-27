
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/HeroSection';
import MiddleSection from './component/MiddleSection';


function App() {
  return (
    <div className="App">
     <Header/>
     <h3 className='heading'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
     <Hero/>
     <MiddleSection/>
     <Footer/>
    </div>
  );
}

export default App;
