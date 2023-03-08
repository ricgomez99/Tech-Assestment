import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <FirstSection />
      </div>
      <div>
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
