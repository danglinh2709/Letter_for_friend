import { useState } from "react";
import HeartLetter from "./HeartLetter";
import FloatingText from "./FloatingText";

function App() {
  const [showText, setShowText] = useState(false);

  const handlePaperShown = () => {
    setShowText(true); // chỉ hiện khi thư đã bật lên
  };

  return (
    <>
      <HeartLetter onPaperShown={handlePaperShown} />
      {showText && <FloatingText />}
    </>
  );
}

export default App;
