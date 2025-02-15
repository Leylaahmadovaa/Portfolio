import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { check } from '../store/configSlice'
import { Color } from "../store/context";

const Settings: React.FC = () => {
  const context = useContext(Color);
  if (!context) {
    throw new Error("Settings must be used within a ColorProvider");
  }
  const { color, setColor } = context;

  const config = useSelector(
    (state: { config: { value: boolean } }) => state.config.value
  );
  const dispatch = useDispatch()


  function HandleClick(newcolor:string){
    setColor(newcolor)
  }

  return (
    <div
      className={`xl:px-[120px] md:px-[120px] px-[50px] py-[140px] fixed bg-[#5c797a] h-[100vh] right-0 z-[2] translate-y-[-30px] transition-all duration-1000 transition-(opacity, visiblity) ${
        config
          ? "opacity-100 visible w-[65%]"
          : "opacity-0 invisible w-[0px]"
      }`}
    >
      <div className="absolute right-[20px] top-[20px] text-white border-2 border-white w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer"
      onClick={()=>dispatch(check())}
      >X</div>
      <h1 className="text-white xl:text-[40px] md:text-[40px] text-[20px] mb-[20px]">Configuration</h1>
      <p className="text-white my-[40px]">COLORS</p>
      <div className="flex gap-[20px] xl:flex-row md:flex-row flex-col">
        <div
        onClick={()=>HandleClick("#6d8d8e")}
          className="w-[40px] h-[40px] rounded-full border-[1px] hover:border-[3px] hover:cursor-pointer bg-[#6d8d8e]"
        ></div>
        <div
        onClick={()=>HandleClick("#475784")}

          className="w-[40px] h-[40px] rounded-full border-[1px] hover:border-[3px] hover:cursor-pointer bg-[#475784]"
        ></div>
        <div
        onClick={()=>HandleClick("#246c4a")}

          className="w-[40px] h-[40px] rounded-full border-[1px] hover:border-[3px] hover:cursor-pointer bg-[#246c4a]"
        ></div>
        <div
        onClick={()=>HandleClick("#4aa0ff")}

          className="w-[40px] h-[40px] rounded-full border-[1px] hover:border-[3px] hover:cursor-pointer bg-[#4aa0ff]"
        ></div>
        <div
        onClick={()=>HandleClick("#146f74")}

          className="w-[40px] h-[40px] rounded-full border-[1px] hover:border-[3px] hover:cursor-pointer bg-[#146f74]"
        ></div>
      </div>
    </div>
  );
};

export default Settings;
