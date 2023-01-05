import {
  About,
  Contact,
  Header,
  Skills,
  Testimonial,
  Work,
  Footer,
} from "./container";
import { Navbar } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
