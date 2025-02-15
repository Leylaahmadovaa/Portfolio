import { useContext } from 'react';
import { Color } from '../store/context';

const Services: React.FC=()=>{
     const context = useContext(Color);
              if (!context) {
                throw new Error("Settings must be used within a ColorProvider");
              }
            const { color, setColor } = context;
    return <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[200px]">
       <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
       <i className="fa-solid fa-bars-staggered"></i>
             <p>SERVICES</p>
       </div>
       <div className="mt-[50px]">
        <h3 className="xl:text-[50px] md:text-[25px] text-white mb-[35px] text-[35px]">My <span 
        style={{
            color:color
          }}
        >Specializations</span></h3>
        <div className="md:w-[92%] flex justify-between border-2 border-white hover:border-[#5c797a] transition-all duration-500 rounded-3xl h-[185px] px-[40px] pt-[40px]">
            <div className="text-white">
                <h4 className="xl:text-[28px] md:text-[20px]">Development</h4>
                <p className="text-[#5c797a] md:text-[14px]">I build website go live with Javascript and React</p>
            </div>
            <div className="text-[#5c797a] xl:text-[28px] md:text-[20px]">
                <i className="fa-solid fa-code"></i>
            </div>
        </div>
       </div>
    </div>
  }
  
  
  export default Services;
  