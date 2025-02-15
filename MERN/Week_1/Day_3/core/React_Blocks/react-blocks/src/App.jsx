import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from "./components/Header";
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';





 
   
 

          const App = () => {
            return (
              <div className="app">
                <Header />
                <div className="content">
                  <Navigation />
                  <MainContent />
                </div>
              </div>
            );
          };
          
      
    


export default App
