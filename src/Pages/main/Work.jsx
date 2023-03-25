import React from "react";
import { works } from "../../Data";
import { useNavigate } from "react-router";
import Bluebtn from "./../../components/Buttons/Bluebtn";
import Mainlayout from "../../Layouts/Mainlayout";

function Work() {
  // datas
  const { Desig, Port, Typograph, Comdesign } = works;

  // broken down data
  const { Big, Pretittle1, Text1, Headline1, Desigimg } = Desig;
  const { Pretittle2, Text2, Headline2, Portimg } = Port;
  const { Pretittle3, Text3, Headline3, Typoimg } = Typograph;
  const { Pretittle4, Text4, Headline4, Comimg } = Comdesign;

  const navigate = useNavigate();

  return (
    <Mainlayout>
      <div className="px-60 py-16">
        <h1 className="text-[44px] font-black leading-[60px]">{Big}</h1>
        <div className="flex pb-9 mt-10 justify-between border-b border-solid border-[#E0E0E0] ">
          <div className="w-full">
            <img className="" src={Desigimg} alt="" />
          </div>
          <div className="w-[200%]">
            <h1 className="text-[30px] font-bold cursor-pointer" onClick={() => navigate("/workdetails")}>
              {Pretittle1}
            </h1>
            <div className=" w-[37%] flex mt-5 justify-between">
              <Bluebtn>2020</Bluebtn>
              <p className="text-xl text-[#8695A4]">{Text1}</p>
            </div>
            <p className=" w-[80%] mt-5">{Headline1}</p>
          </div>
        </div>
        <div className="flex mt-9 pb-9 border-b border-solid border-[#E0E0E0]">
          <div className="w-full">
            <img src={Portimg} alt="" />
          </div>
          <div className="w-[200%]">
            <h1 className="text-[30px] font-bold cursor-pointer">{Pretittle2}</h1>
            <div className=" w-[36%] flex mt-5 justify-between">
              <Bluebtn>2018</Bluebtn>
              <p className="text-xl text-[#8695A4]">{Text2}</p>
            </div>
            <p className=" w-[80%] mt-5">{Headline2}</p>
          </div>
        </div>
        <div className="flex mt-9 pb-9 border-b border-solid border-[#E0E0E0]">
          <div className="w-full">
            <img src={Typoimg} alt="" />
          </div>
          <div className="w-[200%]">
            <h1 className="text-[30px] font-bold cursor-pointer">{Pretittle3}</h1>
            <div className=" w-[38%] flex mt-5 justify-between">
              <Bluebtn>2018</Bluebtn>
              <p className="text-xl text-[#8695A4]">{Text3}</p>
            </div>
            <p className=" w-[80%] mt-5">{Headline3}</p>
          </div>
        </div>
        <div className="flex mt-9 pb-9 border-b border-solid border-[#E0E0E0]">
          <div className="w-full">
            <img src={Comimg} alt="" />
          </div>
          <div className="w-[200%]">
            <h1 className="text-[30px] font-bold cursor-pointer">{Pretittle4}</h1>
            <div className=" w-[53%] flex mt-5 justify-between">
              <Bluebtn>2018</Bluebtn>
              <p className="text-xl text-[#8695A4]">{Text4}</p>
            </div>
            <p className=" w-[80%] mt-5">{Headline4}</p>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Work;
