import React from 'react';
import { Home, Twitch as Kitchen, Book, Flower2 } from 'lucide-react';

export const FutureHome: React.FC = () => {
  const rooms = [
    {
      name: "Living Room",
      description: "Where we'll spend cozy evenings watching movies together",
      icon: Home
    },
    {
      name: "Kitchen",
      description: "Creating delicious memories and sharing meals with love",
      icon: Kitchen
    },
    {
      name: "Study",
      description: "Supporting each other's goals and aspirations",
      icon: Book
    },
    {
      name: "Garden",
      description: "Our little paradise where we'll grow flowers and dreams",
      icon: Flower2
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center font-dancing text-danger display-4 mb-5">Our Dream Home</h2>
      <div className="row g-4">
        {rooms.map((room, index) => {
          const Icon = room.icon;
          return (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-danger hover-lift">
                <div className="card-body text-center p-4">
                  <Icon size={48} className="text-danger mb-3" />
                  <h3 className="card-title font-dancing">{room.name}</h3>
                  <p className="card-text">{room.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};