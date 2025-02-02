import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const loveQuotes = [
  "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my forever.",
  "Every moment with you is like a beautiful dream I never want to wake up from.",
  "You're not just my Valentine, you're my everything.",
  "My heart beats in perfect harmony with yours.",
  "Your love is the greatest gift I could ever receive.",
  "With you, every day feels like Valentine's Day.",
  "You make my heart smile in ways no one else can.",
  "Our love story is my favorite of all time.",
  "You're the missing piece to my puzzle, the answer to my heart's questions.",
  "Forever wouldn't be long enough with you."
];

export const CountdownPage: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentQuote, setCurrentQuote] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const valentinesDay = new Date('2025-02-14T00:00:00');
      const now = new Date();
      const difference = valentinesDay.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Change quote every 5 seconds
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % loveQuotes.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  useEffect(() => {
    setCurrentQuote(loveQuotes[quoteIndex]);
  }, [quoteIndex]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderTimeUnit = (value: number, label: string) => (
    <div className="col-6 col-md-3 mb-4">
      <div 
        className={`card border-danger h-100 ${isHovered ? 'animate-float' : ''}`}
        style={{ transition: 'transform 0.3s ease' }}
      >
        <div className="card-body text-center p-4">
          <h2 className="display-4 mb-0 text-danger fw-bold">{value}</h2>
          <p className="mb-0 text-uppercase font-weight-bold">{label}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden heart-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-1 font-dancing text-gradient mb-4">
            Will You Be My Valentine?
            <span className="ms-3 d-inline-block animate-pulse">💝</span>
          </h1>
          <p className="lead text-muted mb-3">
            Counting down to the most romantic day of the year...
          </p>
          <p className="font-dancing text-danger fs-3 mb-5 animate-fade-in">
            {currentQuote}
          </p>
        </div>

        <div 
          className="row justify-content-center g-4 mb-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {renderTimeUnit(timeLeft.days, 'Days')}
          {renderTimeUnit(timeLeft.hours, 'Hours')}
          {renderTimeUnit(timeLeft.minutes, 'Minutes')}
          {renderTimeUnit(timeLeft.seconds, 'Seconds')}
        </div>

        <div className="text-center animate-fade-in">
          <button
            onClick={onEnter}
            className="btn btn-valentine btn-lg px-5 py-3 rounded-pill"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="me-2">💝</span>
            Enter Our Love Story
            <span className="ms-2">💝</span>
          </button>
        </div>

        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="position-absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 20}px`,
                opacity: 0.1
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};