import React from 'react';
import './App.css';
import { Background } from './features/background/background';
import { NextImage } from './features/background/nextImage';
import { Header } from './features/header/header';
import { Main } from './features/main/main';
import { Footer } from './features/footer/footer';

function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <Header/>
      </header>
      <div id='left' className='arrow'>&lt;</div>
      <main className='App-main'>
        <Main/>
      </main>      
      <NextImage/>
      <footer className='App-footer'>
        <Footer/>
      </footer>      
    </div>
  );
}

export default App;
