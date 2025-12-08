import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Band from "./Components/band";
import Services from "./Components/Services";
import { SecondBand } from "./Components/SecondBand";
import MeetPets from "./Components/MeetPets";
import { Band3 } from "./Components/Band3";
import SubscribePage from "./Components/SubscribePage";
import Footer from "./Components/Footer";
import PageImg from "./Components/PageImg";
import Schedule from "./Components/Schedule";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Band backgroundColor="#d6fe3b" />
      <Services />
      <SecondBand />
      <PageImg />
      <Band backgroundColor="#ffafec" />
      <MeetPets />
      <Band3 />
      <Schedule />
      <SubscribePage />
      <Footer />
    </>
  );
}
