import { useEffect, useState } from "react";
import "./FloatingText.css";

const messages = [
  "You complete my world.",
  "I’m grateful for you every single day.",
  "You're my person.",
  "With you, I feel at home.",
  "You mean the world to me.",
  "Thank you for always understanding me.",
  "You make my heart feel safe.",
  "Even in silence, I feel close to you.",
  "You're one of the best things that ever happened to me.",
  "Every moment with you is a memory I cherish.",
  "You bring light into my life.",
  "You're not just a friend, you're my soul twin.",
  "I believe in you, always.",
  "Thank you for simply being you.",
  //   "I’ll always cheer you on.",
  //   "You're the reason I smile.",
  //   "You’re irreplaceable.",
  //   "You make my life better.",
  //   "Your friendship is a treasure.",
  //   "Together, we shine.",
  //   "I always feel heard with you.",
];

function FloatingText() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let idCounter = 0;

    const createFloatingText = () => {
      const newItems = [];
      for (let i = 0; i < 5; i++) {
        // ✨ tạo 5 chữ mỗi lần
        const directions = ["floatUp", "floatUpLeft", "floatUpRight"];
        const newItem = {
          id: idCounter++,
          text: messages[Math.floor(Math.random() * messages.length)],
          left: Math.random() * 100,
          top: Math.random() * 100,
          animation: directions[Math.floor(Math.random() * directions.length)],
          duration: 8 + Math.random() * 4, // từ 8-12s
        };
        newItems.push(newItem);
        // tự xóa sau duration
        setTimeout(() => {
          setItems((prev) => prev.filter((i) => i.id !== newItem.id));
        }, newItem.duration * 1000);
      }

      setItems((prev) => [...prev, ...newItems]);
    };

    const interval = setInterval(createFloatingText, 350); // nhiều nhưng không dồn dập
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={`floating-text ${item.animation}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.text}
        </div>
      ))}
    </>
  );
}

export default FloatingText;
