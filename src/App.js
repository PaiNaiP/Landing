import './App.css';
import { AboutUs } from './components/AboutUs';
import { Blog } from './components/Blog';
import { Classes } from './components/Classes';
import { FootEnd } from './components/FootEnd';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Prices } from './components/Prices';
import { Testimonies } from './components/Testimonies';
import { Timetable } from './components/Timetable';
import { Trainers } from './components/Trainers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutUs/>
      <Classes />
      <Timetable />
      <Trainers/>
      <Gallery/>
      <Blog/>
      <Prices/>
      <Testimonies/>
      <Footer/>
      <FootEnd/>
    </div>
  );
}

export default App;
