import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';


export const Navbar = ({ darkTheme, setDarkTheme }) => {
  // Tema değişimine göre renkleri ayarla
  const backgroundColor = darkTheme ? '#111827' : '#f3f4f6';
  const textColor = darkTheme ? 'white' : 'black';
  const borderColor = darkTheme ? 'grey' : 'black';

  return (
    <div style={{ 
      marginLeft: "50px", 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      paddingBottom: '10px',
      borderBottom: `2px solid ${borderColor}`,
      backgroundColor: backgroundColor,
      color: textColor,
      minHeight: '60px' // Navbar'nın yükseklik ayarı
    }}>
      <Link to="/" style={{ color: textColor, textDecoration: 'none' }}>
        <div style={{ 
          fontSize: '35px', 
          display: 'flex', 
          alignItems: 'center'
        }}>
          <span style={{ 
           
            padding: '0 10px', 
            display: 'flex', 
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '8px' }}>🔍</span> Google
          </span>
        
        </div>
          <Search/>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        style={{
          backgroundColor: textColor,
          color: backgroundColor,
          border: `2px solid ${borderColor}`,
          borderRadius: '12px',
          padding: '10px 20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {darkTheme ? '🌞 Light' : '🌜 Dark'}
      </button>
    </div>
  );
};
