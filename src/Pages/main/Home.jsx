import React from "react";
import { profile } from "../../Data";
import { post } from "../../Data";
import { works } from "../../Data";
import Mainlayout from "../../Layouts/Mainlayout";
import OrangeBtn from "./../../components/Buttons/OrangeBtn";
import Bluebtn from "./../../components/Buttons/Bluebtn";

function Home() {
  // datas
  const { tittle, about, image } = profile;
  const { first, second } = post;
  const { Desig, Port, Typograph } = works;

  // broken down datas
  const { first1, first2, first3, first4, first5, first6 } = first;
  const { second1, second2, second3, second4, second5, second6 } = second;
  const { Pretittle1, Text1, Headline1, Desigimg } = Desig;
  const { Pretittle2, Text2, Headline2, Portimg } = Port;
  const { Pretittle3, Text3, Headline3, Typoimg } = Typograph;

  return (
    <Mainlayout>
      <div className="pl-[14rem] pr-3 text-center pt-20 pb-16 flex justify-between">
        <div className="w-full">
          <div className="text-left">
            <h1 className="text-[44px] font-bold leading-[60px] ">{tittle}</h1>
            <p className=" text-base font-normal mt-7">{about}</p>
            <div className="mt-7">
              <OrangeBtn>Download Resume</OrangeBtn>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className=" w-[50%] rounded-[50%] h-[243px] ml-auto mr-auto bg-cover bg-center"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#EDF7FA] pl-[14rem] pr-[9rem] pt-5 pb-7 flex text-center justify-between">
        <div className="w-full">
          <p className="text-left text-[22px]">{first1}</p>
          <div className="bg-white rounded w-[98%] mt-3">
            <div className="p-5">
              <h1 className="text-[26px] font-bold leading-[38px] text-left">
                {first2}
              </h1>
              <div className=" w-[70%] flex justify-between text-lg mt-5">
                <p>{first3}</p>
                <p>{first4}</p>
                <p>{first5}</p>
              </div>
              <p className=" w-[90%] text-base text-left mt-3">{first6}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-right text-base text-[#00A8CC]">{second1}</p>
          <div className="bg-white ml-auto rounded w-[98%] mt-5">
            <div className="p-5">
              <h1 className="text-[26px] font-bold leading-[38px] text-left">
                {second2}
              </h1>
              <div className=" w-[70%] flex justify-between text-lg mt-5">
                <p>{second3}</p>
                <p>{second4}</p>
                <p>{second5}</p>
              </div>
              <p className="w-[90%] text-base text-left mt-3">{second6}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[14rem] pr-[9rem] pt-5 pb-9">
        <div>
          <p className="text-[22px]">Featured works</p>
          <div className="mt-7">
            <div className="flex pb-5 justify-between border-b border-solid border-[#E0E0E0] ">
              <div className="w-full">
                <img className="" src={Desigimg} alt="" />
              </div>
              <div className="w-[200%]">
                <h1 className="text-[30px] font-bold">{Pretittle1}</h1>
                <div className=" w-[31%] flex mt-5 justify-between">
                  <Bluebtn>2020</Bluebtn>
                  <p className="text-xl text-[#8695A4]">{Text1}</p>
                </div>
                <p className=" w-[95%] mt-5">{Headline1}</p>
              </div>
            </div>
            <div className="flex mt-5 pb-5 border-b border-solid border-[#E0E0E0]">
              <div className="w-full">
                <img src={Portimg} alt="" />
              </div>
              <div className="w-[200%]">
                <h1 className="text-[30px] font-bold">{Pretittle2}</h1>
                <div className=" w-[31%] flex mt-5 justify-between">
                  <Bluebtn>2018</Bluebtn>
                  <p className="text-xl text-[#8695A4]">{Text2}</p>
                </div>
                <p className=" w-[95%] mt-5">{Headline2}</p>
              </div>
            </div>
            <div className="flex mt-5 pb-5 border-b border-solid border-[#E0E0E0]">
              <div className="w-full">
                <img src={Typoimg} alt="" />
              </div>
              <div className="w-[200%]">
                <h1 className="text-[30px] font-bold">{Pretittle3}</h1>
                <div className=" w-[31%] flex mt-5 justify-between">
                  <Bluebtn>2018</Bluebtn>
                  <p className="text-xl text-[#8695A4]">{Text3}</p>
                </div>
                <p className=" w-[95%] mt-5">{Headline3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
