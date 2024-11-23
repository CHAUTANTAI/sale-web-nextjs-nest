"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PoppinsText } from "../commons/text/text";
import { HEADER_ITEMS } from "@/consts/constants";
import { Icon } from "../commons/icon/icon";

interface HeaderProps {
  wrapperClassName?: string;
}

interface LogoProps {
  color?: string;
}

interface HeaderItemProps {
  label?: string;
  selected?: boolean;
  href?: string;
}

export const Logo = ({ color = "black" }: LogoProps) => {
  return (
    <div
      className={`font-poppins text-[24px] font-bold`}
      style={{ color: color }}
    >
      Website Logo
    </div>
  );
};

export const HeaderItem = ({
  label = "",
  selected = false,
  href = "",
}: HeaderItemProps) => {
  return (
    <Link href={href}>
      <PoppinsText
        text={label}
        color="black"
        size={16}
        underline={selected ? true : false}
        underlineColor="black"
        underlineOpacity={0.5}
      />
    </Link>
  );
};

export const HeaderButton = () => {
  const pathname = usePathname(); // get current URL

  return (
    <div className="flex gap-x-10">
      {HEADER_ITEMS.map((item) => (
        <HeaderItem
          key={item.href}
          label={item.label}
          href={item.href}
          selected={pathname === item.href}
        />
      ))}
    </div>
  );
};

export const SearchHeaderBox = () => {
  return (
    <div className="flex rounded-lg bg-white items-center my-3 pr-2">
      {/* Input Field */}
      <input
        type="text"
        placeholder="What are you looking for?"
        className="flex-grow px-4 py-2 text-[16px] outline-none bg-transparent"
      />
      {/* Search Icon */}
      <Icon
        name="search"
        wrapperClassName="flex items-center justify-center w-[20%]"
        onClickWrapper={() => alert("On Click Search Icon")}
      />
    </div>
  );
};

export const Header = ({ wrapperClassName = "" }: HeaderProps) => {
  return (
    <div className={wrapperClassName}>
      <div className="w-full flex h-max">
        <div className="w-[55%] my-[14px] flex justify-between items-center">
          <div
            onClick={() => {
              alert("On Click Logo");
            }}
            className="cursor-pointer"
          >
            <Logo />
          </div>
          <HeaderButton />
        </div>
        <div className="w-[45%] flex justify-end">
          <div className="flex justify-between">
            <SearchHeaderBox />
            <div className="flex items-center space-x-2 mx-2">
              <Icon
                name="wishList"
                onClickWrapper={() => alert("OnClick Icon")}
              />
              <Icon name="cart" onClickWrapper={() => alert("OnClick Icon")} />
              <Icon name="user" onClickWrapper={() => alert("OnClick Icon")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ); /* Line 3 */
};
