"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type navProps = {
  title: string;
  param: string;
};

function NavbarItem({ title, param }: navProps) {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");
  const isActive = genre === param;

  return (
    <Link
      href={`/?genre=${param}`}
      className={`hover:text-amber-600 font-semibold ${
        isActive ? "active" : ""
      }`}
    >
      {title}
    </Link>
  );
}

export default NavbarItem;
