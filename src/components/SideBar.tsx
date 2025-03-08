import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isOpened } from "../store/sidebarSlice";
import { change } from "../store/languageSlice";

const SideBar: React.FC = () => {
  const sidebar = useSelector(
    (state: { sidebar: { value: boolean } }) => state.sidebar.value
  );
  const language = useSelector(
    (state: { language: { value: string } }) => state.language.value
  );
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [sections, setSections] = useState<number[]>([]);

  useEffect(() => {
    const updateSections = () => {
      if (window.innerWidth <= 768) {
        setSections([0, 1150, 1900, 3000, 3700, 5200, 6800]);
      } else if (window.innerWidth > 768 && window.innerWidth <= 1280) {
        setSections([0, 600, 1200, 2000, 2600, 3400, 4800]);
      } else {
        setSections([0, 900, 1500, 2300, 2900, 3600, 5400]);
      }
    };
    updateSections();
    window.addEventListener("resize", updateSections);
    return () => window.removeEventListener("resize", updateSections);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        dispatch(isOpened());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, sidebar]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newIndex = null;
      sections.forEach((pos, index) => {
        if (
          scrollPosition >= pos &&
          scrollPosition < (sections[index + 1] || Infinity)
        ) {
          newIndex = index;
        }
      });
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleClick = (index: number) => {
    window.scrollTo({ top: sections[index], behavior: "smooth" });
  };

  return (
    <div
      ref={sidebarRef}
      className={`${
        sidebar
          ? "opacity-100 visible xl:w-[350px] md:w-[220px] w-[220px]"
          : "opacity-0 invisible w-[0px]"
      } transition-all duration-500 text-[15px] h-[800px] bg-[#5c797a] flex flex-col gap-[20px] pt-[80px] xl:pl-[100px] md:pl-[50px] pl-[50px] z-[2] right-0 top-0 fixed`}
    >
      {[
        { icon: "fa-house", label: "Home" },
        { icon: "fa-user", label: "About" },
        { icon: "fa-briefcase", label: "Resume" },
        { icon: "fa-bars-staggered", label: "Services" },
        { icon: "fa-shapes", label: "Skills" },
        { icon: "fa-grip-vertical", label: "Portfolios" },
        { icon: "fa-envelope", label: "Contact" },
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="cursor-pointer flex items-center gap-3"
        >
          <i
            style={{
              color: activeIndex === index ? "white" : "#90b2b4",
            }}
            className={`fa-solid ${item.icon} transition-colors duration-300`}
          ></i>
          <span
            className={`transition-colors duration-300 ${
              activeIndex === index ? "text-white" : "text-[#90b2b4]"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
      <div className="text-[#90b2b4] mt-[30px]">
        <h4 className="text-[20px]">Social</h4>
        <div className="text-[19px] flex gap-[20px] mt-[20px]">
          <a
            title="linkedin"
            href="https://www.linkedin.com/in/leyla-ahmadova-bb0368260"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-500"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            title="github"
            href="https://github.com/Leylaahmadovaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-500"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div>
        <div
        onClick={()=>dispatch(change("AZ"))}
        style={{
          color:language=="AZ"?"white":"#90b2b4"
        }}
        className="cursor-pointer"
        >AZ</div>
        <div
        onClick={()=>dispatch(change("EN"))}
        style={{
          color:language=="EN"?"white":"#90b2b4"
        }}
        className="cursor-pointer">EN</div>
      </div>
    </div>
  );
};

export default SideBar;
