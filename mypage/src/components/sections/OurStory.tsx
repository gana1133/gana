import React from 'react';

export const OurStory: React.FC = () => {
  const memories = [
    {
      date: "December 14, 2019",
      title: "The Day We Met",
      description: "A magical moment that changed our lives forever.",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80"
    },
    {
      date: "First Date",
      title: "Beginning of Forever",
      description: "Every second felt like magic with you.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80"
    },
    {
      date: "Special Moments",
      title: "Countless Memories",
      description: "Each day brings new reasons to fall in love with you.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center font-dancing text-danger display-4 mb-5">Our Beautiful Journey</h2>
      <div className="row g-4">
        {memories.map((memory, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 border-danger hover-lift">
              <img 
                src={memory.image} 
                className="card-img-top" 
                alt={memory.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h3 className="card-title font-dancing text-danger">{memory.title}</h3>
                <p className="text-muted mb-2">{memory.date}</p>
                <p className="card-text">{memory.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};