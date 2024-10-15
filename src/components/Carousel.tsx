import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "08 Aug", icon: "🌞", temperature: "24°C" },
    { title: "09 Aug", icon: "🌧️", temperature: "18°C" },
    { title: "10 Aug", icon: "⛅", temperature: "22°C" },
    { title: "11 Aug", icon: "🌩️", temperature: "20°C" },
    { title: "12 Aug", icon: "☀️", temperature: "25°C" },
  ];

  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -100) {
      nextSlide();
    } else if (offset.x > 100) {
      prevSlide();
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden relative">
      <motion.div
        className="flex space-x-4 cursor-grab"
        drag="x"
        dragConstraints={{ left: -300 * (cards.length - 2), right: 0 }}
        onDragEnd={handleDragEnd}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] flex-shrink-0 border rounded-lg shadow-md p-4"
          >
            <div className="text-center">
              <div className="text-xl font-bold">{card.title}</div>
              <div className="text-4xl">{card.icon}</div>
              <div className="text-lg mt-2">{card.temperature}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
