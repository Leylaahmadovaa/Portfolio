import { useContext } from 'react';
import { Color } from '../store/context';

const Skills: React.FC=()=>{
     const context = useContext(Color);
                  if (!context) {
                    throw new Error("Settings must be used within a ColorProvider");
                  }
                const { color, setColor } = context;
    return <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[200px]">
       <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
       <i className="fa-solid fa-shapes"></i>
             <p>MY SKILLS</p>
       </div>
       <div className="mt-[50px]">
        <h3 className="text-white xl:text-[50px] md:text-[25px] text-[35px]">My <span style={{
            color:color
          }}>Advantages</span></h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 translate-x-[-30px] mt-[30px]">
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex flex-col items-center border-2 rounded-full w-[150px] h-[200px] justify-center gap-[20px] hover:border-[#5c797a] transition-all duration-500">
                    <img className="xl:w-[85px] md:w-[50px] w-[70px]" src="https://i.postimg.cc/RFwHxhBg/html.avif" alt="logo" />
                    <p className="text-[#5c797a] text-[28px] font-semibold">90%</p>
                </div>
                <p className="text-white font- xl:mb-0 md:mb-0 mb-[30px]">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex flex-col items-center border-2 rounded-full w-[150px] h-[200px] justify-center gap-[20px] hover:border-[#5c797a] transition-all duration-500">
                    <img className="xl:w-[85px] md:w-[50px] w-[70px]" src="https://i.postimg.cc/bYHmQNt0/css.png" alt="logo" />
                    <p className="text-[#5c797a] text-[28px] font-semibold">90%</p>
                </div>
                <p className="text-white font-semibold xl:mb-0 md:mb-0 mb-[30px]">CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex flex-col items-center border-2 rounded-full w-[150px] h-[200px] justify-center gap-[20px] hover:border-[#5c797a] transition-all duration-500">
                    <img className="xl:w-[85px] md:w-[50px] w-[70px]" src="https://i.postimg.cc/sfcJM6kw/javascript.png" alt="logo" />
                    <p className="text-[#5c797a] text-[28px] font-semibold">80%</p>
                </div>
                <p className="text-white font-semibold xl:mb-0 md:mb-0 mb-[30px]">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex flex-col items-center border-2 rounded-full w-[150px] h-[200px] justify-center gap-[20px] hover:border-[#5c797a] transition-all duration-500">
                    <img className="xl:w-[85px] md:w-[50px]" src="https://i.postimg.cc/c4zw3VXM/react.png" alt="logo" />
                    <p className="text-[#5c797a] text-[28px] font-semibold">75%</p>
                </div>
                <p className="text-white font-semibold xl:mb-0 md:mb-0 mb-[30px]">React</p>
            </div>
        </div>
       </div>
    </div>
  }
  
  
  export default Skills;
  