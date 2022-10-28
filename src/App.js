import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Contactus from "./components/ContactUS/Contactus";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Register from "./components/Registration/Register";
import Navbar from "./components/Navbar/Navbar";
import CategoriesDetail from "./components/Categories/CategoriesDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
           
              <Navbar/>
              <Home />
        <About />
              <Categories />
              <Contactus/>
              <Footer />
             </>
            
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
        <Route
          path="/categories/:id"
          element={
            <>
              <Navbar />
              <CategoriesDetail />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
