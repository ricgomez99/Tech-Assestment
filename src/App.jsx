import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import MidSection from "./components/MidSection";
import Stats from "./components/Stats";
import LastSection from "./components/LastSection";
import "./styles/App.css";
import Footer from "./components/Footer";

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
      <div className="mid">
        <MidSection />
      </div>
      <div>
        <Stats />
      </div>
      <div className="last">
        <LastSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
