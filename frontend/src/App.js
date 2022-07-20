import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/shortner/About";
import PreviousUrls from "./components/shortner/PreviousUrls";
import Urlshortner from "./components/shortner/Urlshortner";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Urlshortner />
      <About />
      <PreviousUrls />
      <Footer />
    </div>
  );
}

export default App;
