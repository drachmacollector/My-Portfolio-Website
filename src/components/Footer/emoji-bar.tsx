import React, { useState } from 'react';

function Emojibar() {
  const [flyingEmojis, setFlyingEmojis] = useState([]);
  const [name, setName] = useState('');

  const handleClick = async (emoji, e) => {
    const id = Date.now() + Math.random();
    const buttonRect = e.currentTarget.getBoundingClientRect();

    setFlyingEmojis(prev => [
      ...prev,
      {
        id,
        emoji,
        position: {
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top,
        },
      },
    ]);

    setTimeout(() => {
      setFlyingEmojis(prev => prev.filter(item => item.id !== id));
    }, 1000);

    // Send data to Formspree
    try {
      await fetch('https://formspree.io/f/mqabpdep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Anonymous',
          emoji,
        }),
      });

      setName(''); // 🔄 clear the input field

      // optionally handle success, e.g. show a toast
    } catch (error) {
      console.error('Error sending emoji review:', error);
      // optionally handle error, e.g. show error message
    }
  };

  const emojis = [
    { emoji: '🥰', label: 'Like' },
    { emoji: '👏🏻', label: 'Cheer' },
    { emoji: '🤮', label: 'Celebrate' },
    { emoji: '🔥', label: 'Fire' },
    { emoji: '👎🏻', label: 'Dislike' },
  ];

  return (
    <>
      {/* Flying Emojis Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {flyingEmojis.map(({ id, emoji, position }) => (
          <div
            key={id}
            className="absolute text-2xl animate-fly-emoji"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fly {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(0, -100px);
            opacity: 0;
          }
        }
        .animate-fly-emoji {
          animation: fly 1s ease-out forwards;
        }
      `}</style>

      {/* Emoji Bar */}
      <div className="flex justify-center lg:justify-end">
        <div className="glass-card p-6 space-y-4 max-w-sm">
          <p className="text-center text-white font-medium">
            Did you like my website? Leave a review
          </p>

          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="w-full p-3 bg-white/5 backdrop-blur-sm rounded-full border 
                         border-white/20 text-white placeholder-white/50 text-sm
                         focus:outline-none focus:ring-2 focus:ring-white/30 pl-5 pr-10
                         transition-all duration-200"
            />
          </div>

          <div
            className="hover:scale-x-105 transition-all duration-300 
          *:transition-all *:duration-300 flex justify-center text-2xl 
          items-center z-10 bg-white/5 backdrop-blur-sm gap-2 p-2 rounded-full border border-white/20"
          >
            {emojis.map((item, index) => (
              <button
                key={index}
                onClick={e => handleClick(item.emoji, e)}
                className="relative before:hidden hover:before:flex 
                before:justify-center before:items-center before:h-4 before:text-[.6rem] 
                before:px-1 before:content-[attr(data-label)] before:bg-black before:text-white 
                before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 
                cursor-pointer hover:scale-125 active:scale-95 bg-white/10 backdrop-blur-sm rounded-full 
                p-2 px-2 border border-white/10"
                data-label={item.label}
              >
                {item.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Emojibar;
