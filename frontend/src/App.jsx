// shortlet/frontend/src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ApartmentGrid from './components/ApartmentGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ApartmentGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;