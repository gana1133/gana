import React from 'react';
import { Calendar, Home, Heart, Star } from 'lucide-react';

export const OurFuture: React.FC = () => {
  const milestones = [
    {
      title: "Our Journey Together",
      description: "Every step we take together brings us closer to our dreams.",
      icon: Calendar
    },
    {
      title: "Building Our Home",
      description: "Creating a space filled with love, laughter, and countless memories.",
      icon: Home
    },
    {
      title: "Growing Together",
      description: "Supporting each other's dreams and celebrating every achievement.",
      icon: Heart
    },
    {
      title: "Forever & Always",
      description: "Writing our love story, one beautiful day at a time.",
      icon: Star
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center font-dancing text-danger display-4 mb-5">Our Beautiful Future</h2>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80" 
            alt="Future Together"
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-6">
          <div className="timeline">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="d-flex align-items-start mb-4">
                  <div className="bg-danger rounded-circle p-2 me-3">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-dancing text-danger h4">{milestone.title}</h3>
                    <p className="text-muted">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};