import 'swiper/css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import WeFocusOn from './Components/WeFocusOn/WeFocusOn';
import OurApproach from './Components/OurApproach/OurApproach';
import HowWeDo from './Components/HowWeDo/HowWeDo';
import NoMoreGuess from './Components/NoMoreGues/NoMoreGues';
import BestTime from './Components/BestTime/BestTime';




function App() {
  return (
    <div className="">
     <Menu></Menu>
     <Banner></Banner>
     <WeFocusOn></WeFocusOn>
     <OurApproach></OurApproach>
     <HowWeDo></HowWeDo>
     <NoMoreGuess></NoMoreGuess>
     <BestTime></BestTime>
    </div>
  );
}

export default App;
