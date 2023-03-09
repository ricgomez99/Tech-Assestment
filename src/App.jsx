import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sec1">
        <FirstSection />
      </div>
      <div className="sec2">
        <SecondSection />
      </div>
      <div className="sec3">
        <ThirdSection />
      </div>
    </div>
  );
}

export default App;
