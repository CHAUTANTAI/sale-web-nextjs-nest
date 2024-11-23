import React from "react";
import { PoppinsText } from "../commons/text/text";
import { Icon } from "../commons/icon/icon";

export const TopHeader = () => {
  return (
    <div className="w-full bg-black h-[48px] flex items-center justify-center">
      <div className="w-max flex gap-x-1">
      <PoppinsText text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!" color="text"/>
      <PoppinsText
          text="ShopNow"
          size={14}
          weight="bold"
          color="text"
          underline
        />
      </div>
      <div className="absolute right-4 flex flex-row">
        <PoppinsText text="English" color="text" size={14} weight="normal" />
        <div className="h-[24px] w-[24px] flex items-center justify-center">
          <Icon name="arrowDown"/>
        </div>
      </div>
    </div>
  );
};
/* Vector */
