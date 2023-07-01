import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navBar'
import {Banner} from './component/banner'
import {Skill} from './component/skills'
import {Project} from './component/project'
import {Contact} from './component/Contact'
import {Footer} from './component/Footer'


function App() {  
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
