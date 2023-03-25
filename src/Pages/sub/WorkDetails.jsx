import React from "react";
import { usability } from "../../Data";
import Mainlayout from "../../Layouts/Mainlayout";
import SmallorangeBtn from "./../../components/Buttons/SmallorangeBtn";

const WorkDetails = () => {
  // datas
  const { Desigdash, Headdash } = usability;

  // broken down datas
  const { content1, wordings1, little1, Dashimg } = Desigdash;
  const { content2, wordings2, Headimg1, Headimg2 } = Headdash;

  return (
    <Mainlayout>
      <div className="px-60 py-16">
        <div className="w-full">
          <h1 className=" w-[70%] text-[34px] font-bold leading-[50px]">
            {content1}
          </h1>
          <div className="mt-8">
            <div className=" w-[51%] flex justify-between">
              <SmallorangeBtn>2020</SmallorangeBtn>
              <p className="text-xl font-normal">{wordings1}</p>
            </div>
            <p className=" w-[80%] mt-5 text-base">{little1}</p>
            <img className="mt-5" src={Dashimg} alt="" />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default WorkDetails;
