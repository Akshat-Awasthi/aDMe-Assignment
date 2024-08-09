import React from "react";
import ImageGallery from "./Components/ImageGallery";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
