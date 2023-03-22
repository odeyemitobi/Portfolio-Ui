import React from "react";
import Navbar from '../components/Navbar/Navbar';

function Mainlayout({children}) {
    return (
        <section className=" font-sans">
            <Navbar />
            <div className="w-full">
                {children}
            </div>
        </section>
    )
}

export default Mainlayout;