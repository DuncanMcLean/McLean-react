import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
//import Button from './components/Button'

// Main app function
function App() {
  return (
    <div className="mainContainer">
      <Header/>
      <img src="htmlBackground.jpg" alt="Htmlimage"></img>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
/*
Hex value for color scheme:
Linen - #E9E9E9 (Very light grey)
Plaster - #CDCDCD (Light grey)
Fresh Water - #88BBD6 (Blue)
Ice - #99D3DF (Lighter Blue)
*/


/*  Code for button dropdown
state = {
    open: false,
  };
  handleButtonClick = () =>{
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  }
*/

// https://codedaily.io/tutorials/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked