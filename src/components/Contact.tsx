import { useContext, useState } from "react";
import { Color } from "../store/context";
import { useSelector } from "react-redux";

const Contact: React.FC = () => {
  const context = useContext(Color);
  if (!context) {
    throw new Error("Settings must be used within a ColorProvider");
  }
  const { color, setColor } = context;
  const [hovered1, setHovered1] = useState(false);
  const language = useSelector(
    (state: { language: { value: string } }) => state.language.value
  );
  return (
    <div className="xl:w-[60%] md:w-[60%] w-full xl:pt-0 md:pt-0 pt-[50px] xl:pl-0 md:pl-0 pl-[50px] mt-[100px]">
      <div className="flex text-white border-white border-[1px] w-[150px] h-[35px] rounded-full gap-[5px] items-center justify-center">
        <i className="fa-solid fa-envelope"></i>
        <p>
        {language=="AZ"?"ƏLAQƏ":"CONTACT"}
        </p>
      </div>
      <div className="mt-[40px]">
        <h3 className="xl:text-[50px] md:text-[25px] text-white mb-[35px] text-[35px]">
          {language=="AZ"?"Gəl ":""}
        <span
            style={{
              color: color,
            }}
          >
            {language=="AZ"?"Birlikdə":""}
          </span>
        {language=="AZ"?" İşləyək!":"Let's Work"}
          
          <span
            style={{
              color: color,
            }}
          >
            {language=="EN"?"Together!":""}
          </span>
        </h3>
        <h4 className="text-white xl:text-[28px] md:text-[20px] mb-[50px]">
          leylaahmadova24@gmail.com
        </h4>
        <form
          action=""
          className="grid xl:grid-cols-2 grid-cols-1 gap-[30px] w-[80%] md:text-[14px]"
        >
          <div className="flex flex-col gap-[14px]">
            <label className="text-white font-bold" htmlFor="Name">
            {language=="AZ"?"AD SOYAD":"FULL NAME"}
               <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="Name"
              type="text"
              className="bg-transparent border-2 rounded-2xl h-[40px] focus:border-[#5c797a] outline-none px-3 text-[#5c797a]"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label className="text-white font-bold" htmlFor="Mail">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="Mail"
              type="email"
              className="bg-transparent border-2 rounded-2xl h-[40px] focus:border-[#5c797a] outline-none px-3 text-[#5c797a]"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label className="text-white font-bold" htmlFor="Phone">
            {language=="AZ"?"TELEFON":"PHONE"}
               <span className="text-[#5c797a]">
            {language=="AZ"?" (İstəyə bağlı)":"(optional)"}
                </span>
            </label>
            <input
              id="Phone"
              type="text"
              className="bg-transparent border-2 rounded-2xl h-[40px] focus:border-[#5c797a] outline-none px-3 text-[#5c797a]"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label className="text-white font-bold" htmlFor="Budget">
            {language=="AZ"?"BÜDCƏNİZ":"YOUR BUDGET"}
              <span className="text-[#5c797a]">
              {language=="AZ"?" (İstəyə bağlı)":"(optional)"}</span>
            </label>
            <input
              id="Budget"
              type="number"
              className="bg-transparent border-2 rounded-2xl h-[40px] focus:border-[#5c797a] outline-none px-3 text-[#5c797a]"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label className="text-white font-bold" htmlFor="Message">
              {language=="AZ"?"MESAJ":"MESSAGE"}
              <span className="text-[#5c797a]">{language=="AZ"?" (İstəyə bağlı)":"(optional)"}</span>
            </label>
            <textarea
              id="Message"
              className="bg-transparent border-2 rounded-2xl h-[120px] focus:border-[#5c797a] outline-none px-3 py-[7px] text-[#5c797a]"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor="File"
              className="flex items-center gap-[10px] text-white font-bold hover:cursor-pointer hover:text-[#5c797a] transition-all duration-500"
            >
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <p>
              {language=="AZ"?"FAYL ƏLAVƏ ET":"ADD AN ATTACHMENT"}
              </p>
            </label>
            <input id="File" type="file" hidden />
          </div>
          <button
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            style={{
              backgroundColor: hovered1 ? "white" : color,
              color: hovered1 ? color : "white",
            }}
            type="submit"
            title="send"
            className="my-[20px] border-white  border-[1px] hover:border-[#5c797a] transition-all duration-500 w-[250px] rounded-full h-[50px]"
          >
            {language=="AZ"?"MESAJ GÖNDƏR":"SEND MESSAGE"}   
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
