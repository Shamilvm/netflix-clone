import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-[40px] p-20 display-flex justify-between bg-[#111]">
      <img
        className="fixed left-20 top-2 w-[80px]"
        src="src/assets/netflix_logo.png"
        alt="Netflix logo"
      />
      <img
        className="fixed right-20 top-1 w-[30px]"
        src="src/assets/avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Navbar;
