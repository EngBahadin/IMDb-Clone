import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex dark:bg-[#121212] bg-amber-100 p-4 lg:text-lg justify-center gap-32 ">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
