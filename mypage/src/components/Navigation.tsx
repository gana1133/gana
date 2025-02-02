import React from 'react';
import { Heart, Book, Home, Star, Gift, Calendar } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'love-letter', title: 'Love Letter', icon: Heart },
    { id: 'our-story', title: 'Our Story', icon: Book },
    { id: 'future-home', title: 'Future Home', icon: Home },
    { id: 'star-map', title: 'Star Map', icon: Star },
    { id: 'promises', title: 'Promises', icon: Gift },
    { id: 'our-future', title: 'Our Future', icon: Calendar }
  ];

  return (
    <div className="position-fixed start-0 top-0 h-100 bg-white shadow-lg p-4" style={{ width: '320px' }}>
      <div className="text-center mb-5">
        <h2 className="font-dancing text-gradient mb-3">Our Love Story</h2>
        <button 
          onClick={() => setCurrentPage('home')}
          className="btn btn-outline-danger rounded-pill w-100"
        >
          Back to Home
        </button>
      </div>
      <div className="d-flex flex-column gap-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`
                btn d-flex align-items-center gap-3 p-3 rounded-3
                ${currentPage === item.id ? 'btn-danger' : 'btn-outline-danger'}
              `}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};