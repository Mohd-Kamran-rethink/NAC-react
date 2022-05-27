import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./routes/home/Home";
import Registration from "./routes/business/registration/Registration.jsx";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="business">
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
