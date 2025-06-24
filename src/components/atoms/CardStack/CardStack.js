import React, { useState, useRef } from "react";
import "./CardStack.css";

const images = [
  "https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/77/42/49/1000_F_177424957_0Tke1xJKYCMPtIjXyE8nocGN1vXjsJyj.jpg",
  "https://as2.ftcdn.net/v2/jpg/02/50/08/05/1000_F_250080568_QvCaYVy1NWJAVGeXdwa9YCKRtFLWITnZ.jpg",
  "https://naturealberta.ca/wp-content/uploads/2025/04/6.-Tree-Swallow-NICK-CARTER-768x670.jpg",
  "https://naturealberta.ca/wp-content/uploads/2025/04/Northern-House-Wren-11-NICK-CARTER-768x843.jpg",
  "https://naturealberta.ca/wp-content/uploads/2024/07/9-Flicker-hybrid-T-LePrieur-768x512.jpg",
];

const CardStack = () => {
  const [cards, setCards] = useState(images);
  const [isAnimating, setIsAnimating] = useState(false);
  const topCardRef = useRef(null);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Trigger animation class
    if (topCardRef.current) {
      topCardRef.current.classList.add("card-exit");
    }

    // Wait for animation to finish
    setTimeout(() => {
      const newOrder = [...cards.slice(1), cards[0]];
      setCards(newOrder);
      setIsAnimating(false);

      // Remove class after animation
      if (topCardRef.current) {
        topCardRef.current.classList.remove("card-exit");
      }
    }, 500); // match animation duration
  };

  return (
    <div className="card-stack-container">
      <div className="card-stack">
        {cards.map((src, index) => {
          const translateY = index * 10;
          const scale = 1 - index * 0.03;
          const zIndex = cards.length - index;
          let rotate = "0deg";
          if (index === 1) rotate = "-15deg";
          else if (index === 2) rotate = "15deg";

          const style = {
            transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate})`,
            zIndex,
            opacity: index > 2 ? 0 : 1,
          };

          return (
            <div
              key={index}
              ref={index === 0 ? topCardRef : null}
              className="card"
              style={style}
              onClick={index === 0 ? handleClick : null}
            >
              <img src={src} alt={`Card ${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardStack;
