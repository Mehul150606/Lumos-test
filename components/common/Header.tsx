import React from "react";
import Image from "next/image";
import Logo from "@/app/img/Logo_Petfood.png";
import Heart from "@/app/img/wishlist.png";
import User from "@/app/img/user.png";
import Bag from "@/app/img/pet_bag.png";
import FaBars from "@/app/img/FaBars.png";
import Search from "@/app/img/search.png";
import ArrowDown from "@/app/img/arrowDown.png";
import NotificationSlider from "@/components/common/NotifactionSlider";

const Header: React.FC = () => {
  return (
    <div>
      <NotificationSlider />

      <div className="bg-white flex items-center justify-between py-5 px-6 md:px-20 shadow-md">
        <div className="md:hidden">
          <Image
            src={FaBars}
            width={24}
            height={24}
            alt="Menu"
            className="cursor-pointer"
          />
        </div>

        <div className="text-center md:text-left">
          <Image
            src={Logo}
            width={190}
            height={50}
            alt="Logo"
            className="mx-auto md:m-0"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8 text-lg text-black-300 ml-6 font-semibold text-[22px] leading-[33px]">
          <div className="flex items-center cursor-pointer hover:text-teal-500">
            Pets Food{" "}
            <span className="ml-2">
              <Image
                src={ArrowDown}
                width={16}
                height={16}
                alt="Menu"
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-teal-500">
            Accessories{" "}
            <span className="ml-2">
              <Image
                src={ArrowDown}
                width={16}
                height={16}
                alt="Menu"
                className="cursor-pointer"
              />
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center mx-6 flex-grow max-w-[547px]">
          <div className="relative w-full max-w-[547px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src={Search}
                width={24}
                height={24}
                alt="Menu"
                className="cursor-pointer"
              />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-md bg-gray-50 text-black-300 focus:outline-none font-semibold text-[16px] leading-[24px] placeholder:text-black-300 opacity-50"
              placeholder="Search For Product"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="rounded-full bg-gray-50 p-2 hidden md:flex">
            <Image
              src={Heart}
              width={25}
              height={25}
              alt="Wishlist"
              className="cursor-pointer"
            />
          </div>
          <div className="rounded-full bg-gray-50 p-2 hidden md:flex">
            <Image
              src={User}
              width={25}
              height={25}
              alt="User Account"
              className="cursor-pointer"
            />
          </div>
          <div className="relative rounded-full md:bg-gray-50 p-2">
            <Image
              src={Bag}
              width={25}
              height={25}
              alt="Shopping Cart"
              className="cursor-pointer"
            />
            <span className="absolute -top-1 right-0 bg-[#FDC161] text-white text-xs rounded-full px-[6px]">
              1
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-3 shadow-md md:hidden">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image
              src={Search}
              width={24}
              height={24}
              alt="Menu"
              className="cursor-pointer"
            />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border rounded-3xl bg-gray-50 text-black-300 focus:outline-none placeholder:text-black-300 opacity-50"
            placeholder="Search For Product"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
