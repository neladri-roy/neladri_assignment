import "./globalStyles.scss";
import { Routes, Route , BrowserRouter as Router,} from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import LoginPage from "./pages/Login/LoginPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Products />} />
        </Routes>
        </Router>
       
      </div>
      <Footer/>
    </>
  );
}

export default App;
