import { useSelector } from "react-redux";

const Resume: React.FC = () => {
  const language = useSelector(
    (state: { language: { value: string } }) => state.language.value
  );
  return (
    <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[210px]">
      <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
        <i className="fa-solid fa-briefcase"></i>
        <p>
        {language=="AZ"?"CV":"RESUME"}
        </p>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-white xl:text-[50px] md:text-[25px] text-[35px]">
        {language=="AZ"?"Təhsil":"Education"}
        </h3>
        <ul className="list-outside pl-[20px] flex flex-col gap-[50px] mt-[20px]">
          <li className="hover:cursor-default relative pl-[40px] group before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#445e5f] before:rounded-full before:transition-colors before:duration-500 hover:before:bg-white">
            <p className="text-[#445e5f] xl:mb-[20px] md:mb-[20px] mb-[10px] translate-y-[-5px] transition-all duration-500 group-hover:text-white">
              15.09.2024 ~ 27.12.2024
            </p>
            <div>
              <h4 className="text-white xl:text-[28px] md:text-[20px] text-[21px] xl:w-[450px] md:w-[225px]">
              {language=="AZ"?"Web Proqramlaşdırma":"Web Programming"}
              </h4>
              <p className="text-[#445e5f]">
              {language=="AZ"?"“Code For Future” layihəsi çərçivəsində Alqoritmika kursu":"Algorithmics Course within “Code For Future” project"}
              </p>
            </div>
          </li>
          <li className="hover:cursor-default relative pl-[40px] group before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#445e5f] before:rounded-full before:transition-colors before:duration-500 hover:before:bg-white">
            <p className="text-[#445e5f] xl:mb-[20px] md:mb-[20px] mb-[10px] translate-y-[-5px] transition-all duration-500 group-hover:text-white">
              07.05.2022 ~ 05.11.2024
            </p>
            <div>
              <h4 className="text-white xl:text-[28px] md:text-[20px] text-[21px] xl:w-[450px] md:w-[225px]">
              {language=="AZ"?"İrəli səviyyə Front-End Tərtibatçı (Technest Tam Təqaüd)":"Advanced Front-End Development (Technest Full Scholarship)"}
              </h4>
              <p className="text-[#445e5f]">
              {language=="AZ"?"Azərbaycan Fransız Universiteti":"French-Azerbaijani University"}
              </p>
            </div>
          </li>
          <li className="hover:cursor-default relative pl-[40px] group before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#445e5f] before:rounded-full before:transition-colors before:duration-500 hover:before:bg-white">
            <p className="text-[#445e5f] xl:mb-[20px] md:mb-[20px] mb-[10px] translate-y-[-5px] transition-all duration-500 group-hover:text-white">
              15.09.2022 ~ 10.09.2026
            </p>
            <div>
              <h4 className="text-white xl:text-[28px] md:text-[20px] text-[21px] xl:w-[450px] md:w-[225px]">
              {language=="AZ"?"Komputer Mühəndisliyi (BA proqramları fakultəsi)":"Computer Engineering (Faculty of BA programs)"}
              </h4>
              <p className="text-[#445e5f]">
              {language=="AZ"?"Azərbaycan Dövlət Neft və Sənaye Universiteti":"Azerbaijan State Oil and Industry University"}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
