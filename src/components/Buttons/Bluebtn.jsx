import React from "react";

function Bluebtn(props) {
    return (
      <button class="bg-[#142850] text-white font-bold px-2 rounded-full">
        {props.children}
      </button>
    );
}

export default Bluebtn;