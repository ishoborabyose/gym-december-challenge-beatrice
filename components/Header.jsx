import React from "react";
import Image from "next/image";
import btn from "../public/vectors/btn.svg";
import logo from "../public/vectors/logo.svg";
import menu from "../public/vectors/menu.svg";
import search from "../public/vectors/search.svg";
import Link from "next/link";

function Header() {
  //z-10 fixed
  return (
    <section className="max-w-[104rem] mx-auto  bg-[#072140] flex justify-between text-white  z-10 fixed top-0 w-full px-[24px]">
      <div className="flex items-center flex-row justify-items-start ">
        <div className="p-[6px]">
          <Image src={btn} />
        </div>

        <div className="py-[20px] flex gap-2">
          <Image src={logo} />
          <span className="text-[0.7rem] hidden lg:block font-normal ">
            Technical <br />
            University <br />
            of Munich
          </span>
        </div>
      </div>

      <ul className="hidden items-center text-sm flex-row justify-items-start uppercase lg:flex">
            <li className="p-2 ">
            <Link href={"news"}> News and events </Link>
            </li>
       
            <li className="p-2">
            <Link  href={"news"}> Studies </Link>
            </li>
            <li className="p-2">
            <Link  href={"news"}> Lifelong learning </Link>
            </li>
            <li className="p-2">
            <Link  href={"news"}> research </Link>
            </li>
            <li className="p-2">
            <Link href={"news"}> Innovation </Link>
            </li>
            <li className="p-2">
            <Link href={"news"}> Community </Link>
            </li>
            <li className="p-2">
            <Link href={"news"}> About tum </Link>
            </li>
        </ul>

      <div className="flex items-center flex-row">
        <ul className="mr-[10px] flex flex-row text-[16px]">
          <li className="text-[#ffffffb1] ">DE</li>
          <li className="border-l border-white pl-2 ml-2 text-[#fff]">EN</li>
        </ul>
        <div className="flex items-center">
          <Image className="p-[10px] w-11 h-11" src={search} />
          <Image className="p-[10px] ml-[-10px] w-11 h-11" src={menu} />
        </div>
      </div>
    </section>
  );
}

export default Header;
