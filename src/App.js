import React from 'react';
import './App.css';
import { Background } from './features/background/background';
import { NextImageButton } from './features/background/nextImageButton';
import { PrevImageButton } from './features/background/prevImageButton';
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
      {/* <div id='left' className='arrow'>&lt;</div> */}
      <PrevImageButton/>
      <main className='App-main'>
        <Main/>
      </main>      
      <NextImageButton/>
      <footer className='App-footer'>
        <Footer/>
      </footer>      
    </div>
  );
}

export default App;
