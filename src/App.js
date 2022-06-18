import Header from "./Header/index"
import Aside from "./Aside/index"
import Section from "./Section/index"
import Footer from "./Footer";



import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <Aside/>
        <Section/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
