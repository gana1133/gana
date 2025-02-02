import React, { useState } from 'react';
import { CountdownPage } from './components/CountdownPage';
import { Navigation } from './components/Navigation';
import { LoveLetter } from './components/sections/LoveLetter';
import { OurStory } from './components/sections/OurStory';
import { FutureHome } from './components/sections/FutureHome';
import { StarMap } from './components/sections/StarMap';
import { Promises } from './components/sections/Promises';
import { OurFuture } from './components/sections/OurFuture';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'love-letter':
        return <LoveLetter />;
      case 'our-story':
        return <OurStory />;
      case 'future-home':
        return <FutureHome />;
      case 'star-map':
        return <StarMap />;
      case 'promises':
        return <Promises />;
      case 'our-future':
        return <OurFuture />;
      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 heart-bg">
      {!showMain ? (
        <CountdownPage onEnter={() => setShowMain(true)} />
      ) : (
        <div className="d-flex">
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="flex-grow-1" style={{ marginLeft: '320px' }}>
            {currentPage === 'home' ? (
              <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
                <div className="text-center">
                  <h1 className="display-1 mb-4 font-dancing text-gradient">
                    My Valentine 
                    <span className="ms-2 d-inline-block animate-pulse">💝</span>
                  </h1>
                  <p className="lead text-muted mb-5">
                    Click on any section to explore our love story
                  </p>
                  <div className="row g-4 justify-content-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {[
                      { id: 'love-letter', title: 'Love Letter', emoji: '💌', bg: 'bg-danger bg-opacity-10' },
                      { id: 'our-story', title: 'Our Story', emoji: '📖', bg: 'bg-danger bg-opacity-10' },
                      { id: 'future-home', title: 'Future Home', emoji: '🏡', bg: 'bg-danger bg-opacity-10' },
                      { id: 'star-map', title: 'Star Map', emoji: '✨', bg: 'bg-danger bg-opacity-10' },
                      { id: 'promises', title: 'Promises', emoji: '🤝', bg: 'bg-danger bg-opacity-10' },
                      { id: 'our-future', title: 'Our Future', emoji: '🌈', bg: 'bg-danger bg-opacity-10' }
                    ].map(section => (
                      <div key={section.id} className="col-md-6 col-lg-4">
                        <button
                          onClick={() => setCurrentPage(section.id)}
                          className={`
                            btn w-100 h-100 p-4 rounded-3 hover-scale
                            ${section.bg} border-danger
                          `}
                          style={{ minHeight: '200px' }}
                        >
                          <div className="display-4 mb-3 animate-float">{section.emoji}</div>
                          <h3 className="font-dancing">{section.title}</h3>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                {renderPage()}
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;