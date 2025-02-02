import React from 'react';
import { Star } from 'lucide-react';

export const StarMap: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2 className="font-dancing text-danger display-4 mb-5">Written in the Stars</h2>
        <div className="card border-danger mb-4">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80" 
            alt="Night Sky"
            className="card-img"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-white glass-effect">
            <Star size={48} className="mb-3 animate-sparkle" />
            <p className="h3 font-dancing mb-3">December 14, 2019</p>
            <p className="lead">The night our stars aligned</p>
          </div>
        </div>
        <p className="lead mb-4">This was the exact arrangement of stars when I first saw you.</p>
        <p className="font-dancing text-danger h3">Our love was written in the stars ✨</p>
      </div>
    </div>
  );
};