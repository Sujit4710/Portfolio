import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navBar'
import {Banner} from './component/banner'


function App() {  
  return (
    <div className="App">
      <NavBar />
      <Banner/>
    </div>
  );
}

export default App;
