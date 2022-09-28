import './App.css';
import Equipe from './COMPONENTS/Equipe/equipe';
import Navs from './COMPONENTS/navs';
import Section1 from './COMPONENTS/section1';
import Slider from './COMPONENTS/slider';
import Specialite from './COMPONENTS/Specialite/specialite';





function App() {
  return (
    <div className="App">
  <Navs/>
  <Slider/>
  <Section1/>
  <Specialite />
  <Equipe />
     
   
    </div>
  );
}

export default App;
