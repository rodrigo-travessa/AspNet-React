import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainBody from "./Components/MainBody";
import "./CSS/style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <MainBody />  
    <Footer />
  </div>
);
