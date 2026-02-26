import './App.css';
import LiquidChrome from './LiquidChrome';
import ShinyText from './ShinyText';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'; 
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'games':
        return <p>My sens<br/>CS2 - 60cm/360<br/>OW2 - 50cm/360<br/>800 DPI</p>;
      case 'about':
        return <p>16<br/>#1 aimer in Norway <br/>Grandmaster in JPG <br/>Top 0.008% on Kovaaks</p>;
      default:
        return <p>Welcome to my profile. Check my socials below!</p>;
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden', 
      color: 'white', 
      fontFamily: 'sans-serif',
      backgroundColor: '#000000' // FIXED: Forces the "flash" to be black
    }}>
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.1}
        amplitude={0.8}
        interactive={true}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        
        <Tilt 
          tiltMaxAngleX={12} 
          tiltMaxAngleY={12} 
          perspective={1000} 
          transitionSpeed={1500} 
          scale={1.02} 
          gyroscope={true}
        >
          <div style={{ 
            width: '90vw', 
            maxWidth: '450px', 
            minHeight: '420px', 
            padding: '50px 40px', 
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(25px)', 
            borderRadius: '30px', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center', 
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // FIXED: GPU optimization for Chrome Desktop
            transform: 'translateZ(0)',
            willChange: 'transform, opacity'
          }}>
            
            <div>
              <nav style={{ marginBottom: '30px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '25px', padding: 0 }}>
                  <li><button onClick={() => setActiveTab('home')} style={navBtnStyle(activeTab === 'home')}>Home</button></li>
                  <li><button onClick={() => setActiveTab('games')} style={navBtnStyle(activeTab === 'games')}>Settings</button></li>
                  <li><button onClick={() => setActiveTab('about')} style={navBtnStyle(activeTab === 'about')}>About</button></li>
                </ul>
              </nav>

              <h1 id="head">
                <div className="text-shadow-wrapper">
                  <ShinyText text="croa" speed={4} />
                </div>
              </h1>

              {/* FIXED: mode="wait" and faster duration (0.1s) for rapid switching */}
              <div style={{ marginTop: '20px', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.6', width: '100%' }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px', marginTop: '30px' }}>
  
  {/* Steam */}
  <a href="https://steamcommunity.com/profiles/76561198925985753/" target="_blank" rel="noreferrer" className="social-icon">
    <img src="/photos/steam.png" alt="Steam" style={{ width: '28px' }} />
  </a>

  {/* X / Twitter - Bruker margin-top for å dytte den ned permanent */}
  <a href="https://x.com/ykcroa" target="_blank" rel="noreferrer" className="social-icon" style={{ transform: 'scale(1.5)', marginTop: '4px' }}>
    <img src="/photos/twitter.png" alt="Twitter" style={{ width: '20px' }} />
  </a>

  {/* TikTok - Bruker margin-top for å dytte den ned permanent */}
  <a href="https://www.tiktok.com/@croaptic" target="_blank" rel="noreferrer" className="social-icon" style={{ transform: 'scale(1.3)', marginTop: '4px' }}>
    <img src="/photos/tiktok.png" alt="TikTok" style={{ width: '22px' }} />
  </a>

  {/* Evxl */}
  <a href="https://evxl.app/u/76561198925985753" target="_blank" rel="noreferrer" className="social-icon">
    <img src="/photos/evxl.png" alt="Evxl" style={{ width: '32px' }} />
  </a>
  
</div>


          </div>
        </Tilt>
      </div>
    </div>
  );
}

const navBtnStyle = (isActive) => ({
  background: 'none', 
  border: 'none', 
  color: 'white', 
  cursor: 'pointer',
  opacity: isActive ? 1 : 0.4, 
  fontSize: '0.75rem', 
  textTransform: 'uppercase',
  letterSpacing: '2px', 
  transition: 'opacity 0.3s ease', 
  fontWeight: isActive ? 'bold' : 'normal',
  outline: 'none'
});

export default App;
