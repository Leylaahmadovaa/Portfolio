import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Settings from "../components/Settings";
import SideBar from "../components/SideBar";
import SidePanel from "../components/SidePanel";
import Skills from "../components/Skills";

const MainPage: React.FC=()=>{
    return <div className='pt-[30px] pl-[20px] bg-[#9ebebf] pb-[20px] md:w-full'>
    <div>
      <Me/>
      <SidePanel/>
      <Settings/>
      <SideBar/>
    </div>
    <div className="flex flex-col items-end pr-[90px] pt-[30px]">
      <Main/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
    </div>
  }
  
  
  export default MainPage;
  