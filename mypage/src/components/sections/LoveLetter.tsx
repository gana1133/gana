import React, { useState, useEffect } from 'react';

export const LoveLetter: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `My dearest Krishna Gift,

From the moment I first saw you on December 14, 2019, my life changed forever. Your smile brightens my darkest days, and your love gives me strength I never knew I had.

Every moment with you is a treasure, every laugh we share is music to my ears. You're not just my love, you're my best friend, my confidante, my everything.

I promise to stand by you, support your dreams, and love you more with each passing day.

Forever yours,
With all my love ❤️`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-danger shadow-lg">
            <div className="card-body p-5">
              <h2 className="card-title text-center font-dancing text-danger mb-4">Love Letter</h2>
              <div className="font-dancing fs-4 letter-content" style={{ whiteSpace: 'pre-line' }}>
                {text}
                <span className="cursor-blink">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};