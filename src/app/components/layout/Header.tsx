"use client"

import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"; 
import { useState } from "react";
import { User } from "../icons/User";
import { Right } from "../icons/Right";

export const Header = () => {
  
  type LinksProps = {
    name: string;
    link: string;
  }

  let LinkList: LinksProps[] = [
    {name: 'Home', link: '/'},
    {name: 'Menu', link: '/'},
    {name: 'Sobre', link: '/'},
    {name: 'Contato', link: '/'},
  ]

  let [isOpen, setIsOpen] = useState(false);
  
  return(
    <div className="shadow-sm w-full fixed left-0 top-0 z-1 bg-white">
      <div className="md:px-10 py-4 px-7 bg-white mx-auto flex justify-between items-center max-w-screen-xl">
        <div>
          <Link href={'/'} className="text-primary font-semibold text-2xl">PIZZARIA</Link>
        </div>
        
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-4 cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>}
        </div>

        <ul className={`md:flex md:pl-0 font-semibold md:gap-8 md:items-center absolute md:static md:z-auto z-[-1] left-0 top-full w-full md:w-auto md:top-auto transition-all bg-white duration-200 ease-in border-b border-gray-200 md:border-none pb-7 md:pb-0 ${isOpen ? 'top-12' : '-top-[490px]'}`}>
          {LinkList.map((link, index) => (
            <li key={index} className="ml-9 my-7 md:ml-0 md:my-0 text-gray-500 hover:text-black transition-all">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <Link href={'/'} className="flex gap-2 ml-9 mt-2 md:ml-0 md:my-0 bg-black text-white px-4 py-2 text-center rounded-full w-max">
              Login
              <User />
            </Link>
            <Link href={'/'} className="flex gap-2 ml-9 mt-2 md:ml-0 md:my-0 bg-primary text-white px-8 py-2 text-center rounded-full w-max hover:bg-red-600">
              Register
              <Right />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
