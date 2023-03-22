import React from "react";

function Navbar() {
    return (
      <div className="px-5">
        <ul className="flex justify-end">
          <li className="px-6 py-4 text-xl font-medium">Works</li>
          <li className="px-6 py-4 text-xl font-medium">Blog</li>
          <li className="px-6 py-4 text-xl font-medium">Contact</li>
        </ul>
      </div>
    );
}

export default Navbar;
