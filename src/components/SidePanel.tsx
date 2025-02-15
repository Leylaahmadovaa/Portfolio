import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Color } from '../store/context';

const SidePanel: React.FC = () => {
  const context = useContext(Color);
  if (!context) {
    throw new Error("Settings must be used within a ColorProvider");
  }
  const { color, setColor } = context;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sections, setSections] = useState<number[]>([0, 900, 1500, 2300, 2900, 3600, 5400]);

  useEffect(() => {
    const updateSections = () => {
      const width = window.innerWidth;
      if (width >= 768 && width <= 1280) {
        setSections([0, 600, 1200, 2000, 2600, 3400, 4800]);
      } else {
        setSections([0, 900, 1500, 2300, 2900, 3600, 5400]);
      }
    };

    updateSections(); // Update sections on component mount
    window.addEventListener("resize", updateSections); // Update on window resize

    return () => {
      window.removeEventListener("resize", updateSections);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newIndex = null;
      sections.forEach((pos, index) => {
        if (scrollPosition >= pos && scrollPosition < (sections[index + 1] || Infinity)) {
          newIndex = index;
        }
      });
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially to check current scroll position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]); // Re-run effect when 'sections' array changes

  const handleClick = (index: number) => {
    window.scrollTo({ top: sections[index], behavior: "smooth" });
  };

  return (
    <div className="w-[50px] border-2 xl:flex md:flex hidden flex-col items-center gap-[20px] text-[20px] rounded-full py-[20px] right-[30px] top-[200px] fixed">
      {[
        "fa-house",
        "fa-user",
        "fa-briefcase",
        "fa-bars-staggered",
        "fa-shapes",
        "fa-grip-vertical",
        "fa-envelope",
      ].map((icon, index) => (
        <div key={index} onClick={() => handleClick(index)} className="cursor-pointer">
          <i
            style={{
              color: activeIndex === index ? "white" : color,
            }}
            className={`fa-solid ${icon} transition-colors duration-300`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default SidePanel;
