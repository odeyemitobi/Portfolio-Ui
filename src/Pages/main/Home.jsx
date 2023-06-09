import React from "react";
import { profile } from "../../Data";
import { post } from "../../Data";
import { featureworks } from "../../Data";
import Mainlayout from "../../Layouts/Mainlayout";
import OrangeBtn from "./../../components/Buttons/OrangeBtn";
import Bluebtn from "./../../components/Buttons/Bluebtn";

function Home() {
  // datas
  const { tittle, about, image } = profile;
  const { first, second } = post;
  const { Desig, Port, Typograph } = featureworks;

  // broken down datas
  const { first1, first2, first3, first4, first5, first6 } = first;
  const { second1, second2, second3, second4, second5, second6 } = second;
  const { Pretittle1, Text1, Headline1, Desigimg } = Desig;
  const { Pretittle2, Text2, Headline2, Portimg } = Port;
  const { Pretittle3, Text3, Headline3, Typoimg } = Typograph;

  return (
    <Mainlayout>
      <div className="md:pl-[14rem] md:pr-3 px-3 text-center pt-20 pb-16 md:flex flex flex-col-reverse justify-between">
        <div className="w-full md:mt-0 mt-5">
          <div className="md:text-left text-center">
            <h1 className="md:text-[44px] text-[36px] leading-[50px] font-bold md:leading-[60px] ">
              {tittle}
            </h1>
            <p className=" text-base font-normal mt-7">{about}</p>
            <div className="mt-7">
              <OrangeBtn>Download Resume</OrangeBtn>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-[50%] md:h-[243px] h-[150px] rounded-[50%] ml-auto mr-auto bg-cover bg-center"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#EDF7FA] md:pl-[14rem] md:pr-[9rem] pt-5 pb-7 md:flex text-center justify-between">
        <div className="w-full">
          <p className="md:text-left text-[22px]">{first1}</p>
          <div className="bg-white md:mx-auto mx-1 rounded w-[98%] mt-3">
            <div className="p-5">
              <h1 className="md:text-[26px] text-[19px] font-bold md:leading-[38px] text-left">
                {first2}
              </h1>
              <div className="md:w-[70%] w-[80%] flex justify-between md:text-lg text-sm mt-5">
                <p>{first3}</p>
                <p>{first4}</p>
                <p>{first5}</p>
              </div>
              <p className=" w-[90%] text-base text-left mt-3">{first6}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-right md:visible invisible text-base text-[#00A8CC]">
            {second1}
          </p>
          <div className="bg-white md:ml-auto ml-1 rounded w-[98%] mt-5">
            <div className="p-5">
              <h1 className="md:text-[26px] text-[19px] font-bold md:leading-[38px] text-left">
                {second2}
              </h1>
              <div className=" md:w-[70%] w-[80%] flex justify-between md:text-lg text-sm mt-5">
                <p>{second3}</p>
                <p>{second4}</p>
                <p>{second5}</p>
              </div>
              <p className="w-[90%] text-base text-left mt-3">{second6}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pl-[14rem] md:pr-[9rem] px-5 pt-5 pb-9">
        <div>
          <p className="text-[22px] md:text-left text-center">Featured works</p>
          <div className="mt-7">
            <div className="md:flex pb-5 justify-between border-b border-solid border-[#E0E0E0] ">
              <div className="w-full">
                <img
                  className="md:mx-0 mx-auto md:h-auto h-[13rem] "
                  src={Desigimg}
                  alt=""
                />
              </div>
              <div className="md:w-[200%] w-full">
                <h1 className="md:text-[30px] text-2xl md:mt-0 mt-4 font-bold">
                  {Pretittle1}
                </h1>
                <div className=" md:w-[31%] w-[65%] flex mt-5 justify-between">
                  <Bluebtn>2020</Bluebtn>
                  <p className="text-xl text-[#8695A4]">{Text1}</p>
                </div>
                <p className=" w-[95%] mt-5">{Headline1}</p>
              </div>
            </div>
            <div className="hidden md:flex mt-5 pb-5 border-b border-solid border-[#E0E0E0]">
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
            <div className=" hidden md:flex mt-5 pb-5 border-b border-solid border-[#E0E0E0]">
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
