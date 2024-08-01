"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="relative flex items-center px-5  left-[-13px] max-w-6xl"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full h-fit py-1 px-4 rounded-md placeholder-gray-500 outline-none bg-parent  dark:bg-white border-slate-700 border-[1px] text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movies..."
      />
      <button
        type="submit"
        disabled={search === ""}
        className="absolute right-7  text-amber-500 disabled:text-black"
      >
        <FaSearch className="  " />
      </button>
    </form>
  );
}

export default SearchBox;
