import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  iconLeftUrl: string;
  widht?: number;
  height?: number;
};
const ServiceCard = (props: Props) => {
  return (
    <div className="bg-white w-full sm:h-80 h-60 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
      <div className="flex flex-col justify-between h-full lg:py-11 lg:px-9 md:px-5 md:py-6 sm:py-5 sm:px-5 px-5 py-5 ">
        <div className="flex justify-between w-full">
          <Image
            src={props.iconLeftUrl}
            alt="Icon"
            width={props.widht || 40}
            height={props.height || 40}
          />
          <Image
            src="/arrow_outward.svg"
            alt="Arrow Icon"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#0B0F13] font-medium lg:text-3xl sm:text-2xl md:text-2xl text-xl">
            {props.title}
          </h3>
          <p className="text-[#0B0F13] xl:text-base sm:text-base text-sm">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
