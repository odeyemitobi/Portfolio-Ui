import React from "react";

function SmallorangeBtn(props) {
  return (
    <button class="bg-[#FF7C7C] text-white font-bold px-2 rounded-full">
      {props.children}
    </button>
  );
} 

export default SmallorangeBtn;
