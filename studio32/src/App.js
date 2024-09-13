import './App.css';
import About from './Component/About';
import Amenities from './Component/Amenities';
import Footer from './Component/Footer';
import Form from './Component/Form';
import Gallery from './Component/Gallery';
import Header from './Component/Header';
import Plan from './Component/Plan';
import PopupForm from './Component/PopupForm';
import Section from './Component/Section';
import WhatsAppIcon from './Component/WhatsAppIcon';

function App() {
  return (
    <div >
      <PopupForm/>
      <Header/>
      <Section/>
      <About/>
      <Form/>
      <Amenities/>
      <Gallery/>
      <Plan/>
      <Footer/>
      <WhatsAppIcon/>
    </div>
  );
}

export default App;
