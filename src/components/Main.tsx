import { useContext } from "react";
import { Color } from "../store/context";
import { useDispatch } from "react-redux";
import { isOpened } from "../store/sidebarSlice";
const Main: React.FC = () => {
  const context = useContext(Color);
  if (!context) {
    throw new Error("Settings must be used within a ColorProvider");
  }
  const { color, setColor } = context;

  const dispatch = useDispatch();
  return (
    <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px]">
      <div className="flex w-full justify-between mb-[20px]">
        <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
          <i className="fa-solid fa-house"></i>
          <p>INTRODUCE</p>
        </div>
        {/* navbar */}
        <div
          onClick={() => dispatch(isOpened())}
          className="xl:static md:static fixed right-[100px] hover:cursor-pointer xl:translate-x-[40px] md:translate-x-[40px] translate-x-[70px] xl:translate-y-[0px] md:translate-y-[0px] translate-y-[-90px] text-[30px] text-white border-white border-[1px] rounded-full w-[50px] h-[50px] flex justify-center items-center"
        >
          <i className="fa-solid fa-equals"></i>
        </div>
      </div>
      <h1 className="xl:text-[70px] md:text-[35px] text-[35px] w-[80%] text-white">
        <span style={{ color: color }}>Leyla Ahmadova</span>, Front-End
        developer
      </h1>
      <p className="text-[#445e5f] font-semibold xl:text-[17px] md:text-[14px] mt-[30px] md:w-[300px]">
        I code beautifully things and I love what I do.
      </p>
      <div className="flex justify-center w-[75%] xl:mt-[170px] md:mt-[85px] mt-[120px]">
        <div className="text-white text-[50px] flex items-center justify-center">
          <img
            src="https://i.postimg.cc/qBLmRzL3/round-text.png"
            alt="myprojectsphoto"
            className="absolute animate-spin-slow xl:w-[200px] md:w-[100px] w-[150px]"
          />
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <div className="mt-[100px] flex xl:flex-row md:flex-row flex-col xl:gap-[100px] md:gap-[50px] gap-[100px]">
        <div>
          <h3
            style={{
              color: color,
            }}
            className="xl:text-[80px] md:text-[40px] text-[60px]"
          >
            1+
          </h3>
          <p className="xl:text-[20px] md:text-[10px] w-[100px] text-[#6d8d8e] mt-[20px]">
            YEARS OF EXPERIENCE{" "}
          </p>
        </div>
        <div>
          <h3
            style={{
              color: color,
            }}
            className="xl:text-[80px] md:text-[40px] text-[60px]"
          >
            2+
          </h3>
          <p className="xl:text-[20px] md:text-[10px] w-[100px] text-[#6d8d8e] mt-[20px]">
            PROJECTS COMPLETED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
