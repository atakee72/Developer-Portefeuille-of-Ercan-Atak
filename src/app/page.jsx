import React from "react";
import {
  Header,
  Info,
  Topics,
  Blog,
  Testimonials,
  Footer,
  Navbar,
} from "@/components";
const App = () => {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Topics />
        <Info />
        <Blog />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default App;
