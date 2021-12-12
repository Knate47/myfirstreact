import logo from '../logo.svg';
import controller from '../controller.svg';
import happy from '../happy.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';


//jsx   jx xml
//react not a framework!
//angular. vue
//function stateless - 
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={happy} className="App-happy" alt="happy" />
        <p>
          _______________________
        </p>
        <p>
          WELCOME, User :)
        </p>
        <p>
          Use the Navigation Bar above to navigate to our registration forms.
        </p>
      </header>
    </div>
    
  );
}

export default Home;
