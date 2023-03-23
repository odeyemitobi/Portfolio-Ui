import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";

function Mainlayout({ children }) {
  return (
    <section className=" font-sans">
      <Navbar />
      <div className="w-full">{children}</div>
      <div className="text-center pt-9 pb-9">
        <div className="justify-center flex">
          <div className="px-4 py-3">
            <FaFacebookSquare size={35} />
          </div>
          <div className="px-4 py-3">
            <AiOutlineInstagram size={35} />
          </div>
          <div className="px-4 py-3">
            <AiOutlineTwitter size={35} />
          </div>
          <div className="px-4 py-3">
            <FaLinkedin size={35} />
          </div>
        </div>
        <div className="text-sm">
          <p>Copyright ©2020 All rights reserved </p>
        </div>
      </div>
    </section>
  );
}

export default Mainlayout;
