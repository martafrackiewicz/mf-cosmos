import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Illustration from "./components/Illustration/Illustration";
import Modal from "./components/Modal/Modal";
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState("");

  const handleOpenModal = (card) => {
    setCard(card);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main_container">
      <Navbar />
      <div className="main_section_wrapper">
        <Links handleOpenModal={handleOpenModal} />
        <Illustration />
        <Modal card={card} showModal={showModal} handleHideModal={handleHideModal} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
