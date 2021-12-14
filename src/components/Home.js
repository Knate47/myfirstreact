import happy from '../happy.svg';
import '../App.css';
import Button from './Button';


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
        <Button/>
      </header>
    </div>
    
  );
}

export default Home;
