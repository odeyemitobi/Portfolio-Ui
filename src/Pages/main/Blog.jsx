import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import { blogs } from "../../Data";

function Blog() {
  // datas
  const { blog1, blog2, blog3, blog4 } = blogs;

  // broke down datas
  const { Pretittle, heads1, date1, line1, words1, explain1 } = blog1;
  const { heads2, words2 } = blog2;
  const { heads3, words3 } = blog3;
  const { heads4, words4 } = blog4;

  return (
    <Mainlayout>
      <div className="pl-[17rem] pr-60 py-16">
        <h1 className="text-[44px] font-bold leading-[60px]">{Pretittle}</h1>
        <div className=" w-full mt-10 pb-5 border-b border-solid border-[#E0E0E0]">
          <h1 className="text-[30px] leading-[44px] font-medium">{heads1}</h1>
          <div className=" w-[42%] mt-2 flex justify-between">
            <p className="text-xl">{date1}</p>
            <p>{line1}</p>
            <p className="text-xl text-[#8695A4]">{words1}</p>
          </div>
          <p className=" w-[90%] text-base mt-3">{explain1}</p>
        </div>
        <div className="w-full mt-4 pb-5 border-b border-solid border-[#E0E0E0]">
          <h1 className="text-[30px] leading-[44px] font-medium">{heads2}</h1>
          <div className=" w-[42%] mt-2 flex justify-between">
            <p className="text-xl">{date1}</p>
            <p>{line1}</p>
            <p className="text-xl text-[#8695A4]">{words2}</p>
          </div>
          <p className=" w-[90%] text-base mt-3">{explain1}</p>
        </div>
        <div className="w-full mt-4 pb-5 border-b border-solid border-[#E0E0E0]">
          <h1 className="text-[30px] leading-[44px] font-medium">{heads3}</h1>
          <div className=" w-[42%] mt-2 flex justify-between">
            <p className="text-xl">{date1}</p>
            <p>{line1}</p>
            <p className="text-xl text-[#8695A4]">{words3}</p>
          </div>
          <p className=" w-[90%] text-base mt-3">{explain1}</p>
        </div>
        <div className="w-full mt-4 pb-9 border-b border-solid border-[#E0E0E0]">
          <h1 className="text-[30px] leading-[44px] font-medium">{heads4}</h1>
          <div className=" w-[42%] mt-2 flex justify-between">
            <p className="text-xl">{date1}</p>
            <p>{line1}</p>
            <p className="text-xl text-[#8695A4]">{words4}</p>
          </div>
          <p className=" w-[90%] text-base mt-3">{explain1}</p>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Blog;
