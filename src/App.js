import 'swiper/css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import WeFocusOn from './Components/WeFocusOn/WeFocusOn';
import OurApproach from './Components/OurApproach/OurApproach';




function App() {
  return (
    <div className="">
     <Menu></Menu>
     <Banner></Banner>
     <WeFocusOn></WeFocusOn>
     <OurApproach></OurApproach>
    </div>
  );
}

export default App;
