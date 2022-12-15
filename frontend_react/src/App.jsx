import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;
