import React from 'react';

function OrangeBtn (props) {
    return (
      <button class="bg-[#FF6464] text-white font-medium py-2 px-4 rounded">
        {props.children}
      </button>
    );
}

export default OrangeBtn;