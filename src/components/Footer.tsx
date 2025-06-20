import React from "react";

const Footer = () => {
  const date = new Date();
  console.log(date.getUTCFullYear());
  return (
    <footer className="w-full h-21 bg-[#161b22] px-6">
      <div className="max-w-[1232px] h-full m-auto flex flex-row justify-between items-center">
        <p className="font-mona text-[12px]">
          © {date.getUTCFullYear()} Site & Core Team / Grupo El Comercio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
