import "./styles/global.scss";
import Intro from "./instro/Intro";
import Stack from "./stack/Stack";
import History from "./history/History";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Intro />
      <Stack />
      <History />
      <Footer />
    </>
  );
}

export default App;
