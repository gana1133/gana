import React from 'react';
import { Heart, Star, Gift } from 'lucide-react';

export const Promises: React.FC = () => {
  const promises = [
    {
      title: "Endless Love",
      description: "To love you more and more each day, without condition or hesitation.",
      icon: Heart
    },
    {
      title: "Support & Trust",
      description: "To stand by your side through every dream and challenge.",
      icon: Star
    },
    {
      title: "Joy & Laughter",
      description: "To fill our life with happiness and create beautiful memories together.",
      icon: Gift
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center font-dancing text-danger display-4 mb-5">My Promises to You</h2>
      <div className="row g-4">
        {promises.map((promise, index) => {
          const Icon = promise.icon;
          return (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-danger hover-lift">
                <div className="card-body text-center p-4">
                  <Icon size={48} className="text-danger mb-3" />
                  <h3 className="card-title font-dancing">{promise.title}</h3>
                  <p className="card-text">{promise.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};