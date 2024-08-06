import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppRoutess } from './components/AppRoutess';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const backgroundColor = darkTheme ? '#111827' : '#f3f4f6';

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = darkTheme ? 'white' : 'black';
  }, [darkTheme, backgroundColor]);

  return (
    
      <div style={{ backgroundColor, minHeight: '100vh' }}>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <AppRoutess />
        <Footer />
      </div>
    
  );
};

export default App;