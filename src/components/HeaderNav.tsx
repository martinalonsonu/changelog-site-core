import Image from "next/image";
import Link from "next/link";
import React from "react";
import Favicon from "../../public/favicon.png";

const HeaderNav = () => {
  return (
    <header className="w-full h-20 border-b-[#4e5053] px-6">
      <div className="max-w-[1232px] h-full m-auto flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image alt="El Comercio" src={Favicon} width={32} height={32} />
          <p className="font-mona font-bold text-base md:text-2xl text-white">
            / Site & Core Team
          </p>
        </Link>
        <ul className="hidden md:flex text-base text-white gap-6">
          <li className="hover:underline py-1 font-mona underline-offset-8">
            <Link href="/projects/composer-ia">Composer IA</Link>
          </li>
          <li className="hover:underline py-1 font-mona underline-offset-8">
            <Link href="/projects/merlin-chatbot">Merlin</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderNav;
