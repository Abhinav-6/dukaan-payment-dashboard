import { useState } from "react";

function NavbarListItems({
  children,
  text,
  active,
  setActive,
}: {
  children: JSX.Element;
  text: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleOnClick = function () {
    setActive(text);
  };
  return (
    <div
      className={`w-full flex justify-start gap-2 items-center py-2 px-3 cursor-pointer rounded transition-colors hover:bg-[rgba(255,255,255,0.05)] ${
        active === text ? "bg-[rgba(255,255,255,0.10)]" : "bg-transparent"
      }`}
      onClick={handleOnClick}
    >
      {children}
      <h3 className="leading-5 font-medium opacity-80 mt-1">{text}</h3>
    </div>
  );
}

export default NavbarListItems;
