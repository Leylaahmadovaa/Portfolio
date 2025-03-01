import { useContext } from "react";
import { Color } from "../store/context";

const About: React.FC = () => {
  const context = useContext(Color);
  if (!context) {
    throw new Error("Settings must be used within a ColorProvider");
  }
  const { color, setColor } = context;
  return (
    <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[100px]">
      <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
        <i className="fa-solid fa-user"></i>
        <p>ABOUT</p>
      </div>
      <div>
        <h2 className="xl:text-[55px] md:text-[27.5px] text-white mt-[50px] mb-[30px] text-[35px]">
          Get Confident with{" "}
          <span
            style={{
              color: color,
            }}
          >
            Code
          </span>
        </h2>
        <p className="text-[#445e5f] xl:w-[65%] md:w-[65%] w-[90%] xl:text-[17px] md:text-[14px] text-base/7">
          I am interseted in frontend field and have a wide knowledge. By
          applying responsive design principles and writing efficient codes, I
          ensure that users successfully access websites on every device.
          Working with the latest frontend technologies, frameworks and
          libraries are an important step for me.
        </p>
      </div>
    </div>
  );
};

export default About;
