import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="container">
      {/* Each component will be a different section of 
          the webpage (Header -> About -> Resume -> Contact)
      */}

      <Header/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
      
      


    </div>
  );
}

export default App;
