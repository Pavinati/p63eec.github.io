import React from 'react';
import './App.css';
import Header from './components/header'
import Navba from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'



function App() {
  return (
    <>
    <div className="App">
    <Header />
    <Navba />
    <Footer />
    </div>
    </>
  );
}

export default App;
