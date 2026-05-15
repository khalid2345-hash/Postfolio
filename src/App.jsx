import Header from "./component/Header";
import "./app.css";
import Footer from "./component/Footer";
import About from "./About";
// import Support from "./Support";
import Posfolio from "./Posfolio";
// import Works from "./Works";
// import project from "./project"
import Contact from "./Contact";
import Loader from "./Loader";
// import AddProject from "./Addproject";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  // Loader state
  const [loading, setLoading] = useState(true);

  // sample employees
  const [employees, setEmployees] = useState([
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "Sara", role: "Designer" },
  ]);

  // like function
  const handleLike = () => {
    console.log("Liked!");
  };

  // loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // show loader first
  if (loading) {
    return <Loader />;
  }

  // main app after loading
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<About name="Khalid" />} />

        {/* <Route
          path="/support"
          element={<Support name="About" username="Khalid" />}
        /> */}

        
          {/* <Route path="/works" element={<Works />} /> */}
        

        {/* <Route
          path="/work/:id"
          element={<WorkDetail employees={employees} />}
        /> */}

        <Route path="/portfolio" element={<Posfolio />} />


        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/add-project" element={<AddProject />} /> */}

        {/* <Route path="/projects" element={<Project />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
