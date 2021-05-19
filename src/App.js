import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Illustration from "./components/Illustration/Illustration";
import "./App.scss";

const App = () => {
  return (
    <div className="main_container">
      <Navbar />
      <div className="main_section_wrapper">
        <Links />
        <Illustration />
      </div>
      <Footer />
    </div>
  );
}

export default App;
