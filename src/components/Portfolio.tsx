import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import adminpanel from '../assets/adminpanel.png'
import { useContext } from 'react';
import { Color } from '../store/context';

const Portfolio: React.FC=()=>{
  const context = useContext(Color);
                  if (!context) {
                    throw new Error("Settings must be used within a ColorProvider");
                  }
                const { color, setColor } = context;
    return <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[200px]">
       <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
             <i className="fa-solid fa-grip-vertical" aria-hidden="true"></i>
             <p>PORTFOLIO</p>
       </div>
       <div>
       <h3 className="xl:text-[50px] md:text-[25px] text-white mt-[50px] mb-[30px] text-[35px]">Featured <span style={{
            color:color
          }}>Projects</span></h3>
       <div className='flex flex-col gap-[50px]'>
          <div>
              <img className='rounded-3xl w-[97%]' src={project1} alt="projectphoto" />
              <div className='flex xl:gap-[20px] md:gap-[5px] xl:translate-x-[30px] md:translate-x-[14px] xl:translate-y-[-50px] md:translate-y-[-50px] xl:mt-0 md:mt-0 mt-[20px] xl:flex-row md:flex-row flex-col gap-[20px] md:text-[10px]'>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[120px] md:w-[80px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Tailwind CSS</div>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[90px] md:w-[50px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>React</div>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[120px] md:w-[80px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Redux Toolkit</div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className='xl:translate-y-[-20px] md:translate-y-[-20px] translate-y-[20px] translate-x-[10px] xl:text-[27px] md:text-[20px] text-[#3e5354] inline-block' title="mybrands" href="https://mybrands-copy-finalproject.netlify.app/">MyBrands.az (Copy)</a>
          </div>
          <div>
              <img className='rounded-3xl w-[97%]' src={project2} alt="projectphoto" />
              <div className='flex xl:gap-[20px] md:gap-[5px] xl:translate-x-[30px] md:translate-x-[14px] xl:translate-y-[-50px] md:translate-y-[-50px] xl:mt-0 md:mt-0 mt-[20px] xl:flex-row md:flex-row flex-col gap-[20px] md:text-[10px]'>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[120px] md:w-[80px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Tailwind CSS</div>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[90px] md:w-[50px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>React</div>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[100px] md:w-[60px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Node.js</div>
                <div className='border-2 border-[#5c797] hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[100px] md:w-[60px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Express</div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className='xl:translate-y-[-20px] md:translate-y-[-20px] translate-y-[20px] translate-x-[10px] xl:text-[27px] md:text-[20px] text-[#3e5354] inline-block' title="coin catalog" href="https://github.com/Leylaahmadovaa/FinalProjectAlgorithmics">Coin Catalog (Including Backend)</a>
          </div>
          <div>
              <img className='rounded-3xl' src={adminpanel} alt="projectphoto" />
              <div className='flex xl:gap-[20px] md:gap-[5px] xl:translate-x-[30px] md:translate-x-[14px] xl:translate-y-[-50px] md:translate-y-[-50px] xl:mt-0 md:mt-0 mt-[20px] xl:flex-row md:flex-row flex-col gap-[20px] md:text-[10px]'>
                <div className='border-2 hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[120px] md:w-[80px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>Tailwind CSS</div>
                <div className='border-2 hover:bg-white bg-[#9ebebf] transition-all duration-500 hover:cursor-default rounded-full xl:w-[90px] md:w-[50px] h-[40px] flex justify-center items-center text-white hover:text-[#5c797a]'>React</div>
              </div>
              <a target="_blank" rel="noopener noreferrer" className='xl:translate-y-[-20px] md:translate-y-[-20px] translate-y-[20px] translate-x-[10px] xl:text-[27px] md:text-[20px] text-[#3e5354] inline-block' title="admin panel" href="https://github.com/Leylaahmadovaa/FinalProjectAlgorithmics/blob/main/FrontEndPart/src/pages/LoginPage.jsx">Admin Panel</a>
          </div>
       </div>
       </div>
    </div>
  }
  
  
  export default Portfolio;
  