import React from 'react';
import './App.css';
import { Background } from './features/background/background';
import { NextImageButton } from './features/background/nextImageButton';
import { PrevImageButton } from './features/background/prevImageButton';
import { Weather } from './features/weather/weather';
// import { Header } from './features/header/header';
import { Main } from './features/main/main';
import { Footer } from './features/footer/footer';

function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        {/* <Header/> */}
        <Weather/>
      </header>      
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
