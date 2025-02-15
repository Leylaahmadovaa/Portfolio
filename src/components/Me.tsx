import photo from '../assets/photo.jpeg'
import { useDispatch } from 'react-redux'
import { check } from '../store/configSlice'
import { useContext, useState } from 'react';
import { Color } from '../store/context';

const Me: React.FC=()=>{
  const context = useContext(Color);
    if (!context) {
      throw new Error("Settings must be used within a ColorProvider");
    }
  const { color, setColor } = context;
  const dispatch = useDispatch()
  const [hovered1, setHovered1]=useState(false)
  const [hovered2, setHovered2]=useState(false)
  const [hovered3, setHovered3]=useState(false)
  const [hovered4, setHovered4]=useState(false)
  
  return <div className='fixed'>
    <div
    onClick={()=>dispatch(check())}
    className='text-[#557274] text-[22px] translate-x-[-5px] xl:translate-y-[20px] md:translate-y-[20px]  rotate hover:cursor-pointer'>
      <i className="fa-solid fa-gear animate-spin-slow"></i>
    </div>
    <div className='border-[#53dee3] xl:flex md:flex hidden border-[1px] xl:w-[400px] xl:h-[650px] md:w-[200px] md:h-[350px] flex-col items-center justify-between rounded-3xl pt-[10px] bg-white pb-[30px]'>
      {/* image */}
      <img
      className="xl:w-[300px] xl:h-[400px] md:w-[150px] md:h-[200px] rounded-3xl mb-[20px]"
      src={photo} alt="me" />
      {/* email */}
      <h2 
      style={{
        color:color
      }}
      className='xl:text-[22px] md:text-[11px] font-bold'>leylaahmadova24@gmail.com</h2>
      <p 
      style={{
        color:color
      }}
      className='xl:text-[22px] md:text-[11px] font-semibold'>Baku, Azerabijan</p>
      {/* icons */}
      <div 
      style={{ color: color }}
      className={`flex xl:gap-[20px] md:gap-[10px] mt-[10px] text-[#6d8d8e]`}>
          <a title='linkedin' href="https://www.linkedin.com/in/leyla-ahmadova-bb0368260" target="_blank" rel="noopener noreferrer">
            <div
            onMouseEnter={()=>setHovered2(true)}
            onMouseLeave={()=>setHovered2(false)}
            style={{
                backgroundColor:hovered2?color:"white",
                color:hovered2?"white":color,
            }}
            className='border-2 rounded-full px-[10px] py-[4px] xl:text-[22px] md:text-[11px] transition-all duration-500'>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </a>
          <a title='github' href="https://github.com/Leylaahmadovaa" target="_blank" rel="noopener noreferrer">
            <div
            onMouseEnter={()=>setHovered3(true)}
            onMouseLeave={()=>setHovered3(false)}
            style={{
              backgroundColor:hovered3?color:"white",
              color:hovered3?"white":color,
            }}
            className='border-2 rounded-full px-[10px] py-[4px] xl:text-[22px] md:text-[11px] transition-all duration-500'>
                <i className="fa-brands fa-github"></i>
            </div>
          </a>
          <a title='email' href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <div 
            onMouseEnter={()=>setHovered4(true)}
            onMouseLeave={()=>setHovered4(false)}
            style={{
              backgroundColor:hovered4?color:"white",
              color:hovered4?"white":color,
            }}
            className='border-2 rounded-full px-[10px] py-[4px] xl:text-[22px] md:text-[11px] transition-all duration-500'>
              <i className="fa-solid fa-envelope"></i>
            </div>
          </a>
      </div>
      {/* button */}
      <button 
      onMouseEnter={()=>setHovered1(true)}
      onMouseLeave={()=>setHovered1(false)}
      style={{
        backgroundColor:hovered1?"white":color,
        color:hovered1?color:"white"
      }}
      type='button' className={`flex items-center xl:gap-[10px] md:gap-[5px] xl:text-[20px] md:text-[10px] mt-[10px] rounded-full border-[3px] px-[7px] py-[5px] xl:w-[200px] md:w-[100px] justify-center transition-all duration-500`}>
      <i className="fa-solid fa-envelope"></i>
      <p>HIRE ME!</p>
      </button>
    </div>
  </div>
}


export default Me;
