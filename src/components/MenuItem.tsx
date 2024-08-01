import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type menuProps = {
  title: string;
  Icon: IconType;
  address: string;
};

function MenuItem({ title, address, Icon }: menuProps) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase font-semibold hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}

export default MenuItem;
