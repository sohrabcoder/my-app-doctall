import React from 'react';
import './App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Banner from './components/Banner';
import Navbar4 from './components/Navbar4';
import Bannerbelowtext from './components/Bannerbelowtext';
import Service from './components/Service';
import Partner from './components/Partner';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <Banner />
      <Navbar4 />
      <Bannerbelowtext />
      <Service />
      <Partner /> 
      <Form />
      <Footer />
    
    </div>
  );
};

export default App;
