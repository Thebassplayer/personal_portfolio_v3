import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;
