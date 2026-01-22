import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Team from './components/Team';
import Clients from './components/Clients';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Team />
        <Clients />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
