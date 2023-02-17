import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'; 
import AppContext from './components/useContext';
import  Typewriter  from 'typewriter-effect';

// import scss
import "./style/store.css";
import './style/Footer/footer1.css';


const title = <Typewriter 
                options={{ 
                  autoStart: true, 
                  loop: true, 
                  delay: 40, 
                  strings: ['save more with coupons & up to 70% off!'] 
                }}
              />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider value={title}>
          <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

