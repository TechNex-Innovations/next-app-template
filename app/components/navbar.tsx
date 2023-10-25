import React from "react";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
  return (
    <>
      <div className="w-full h-20  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image
             src="/tni.png"
             alt="logo"
             width={50}
             height={60}
            />
            <span className="font-bold">TechNex Innovations</span>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;