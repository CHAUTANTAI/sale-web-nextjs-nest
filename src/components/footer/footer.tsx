"use client";
import { Icon } from "../commons/icon/icon";
import { PoppinsText } from "../commons/text/text";
import { Logo } from "../header/header";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-black h-[440px] w-full flex flex-col justify-between">
        <div className="flex-grow p-16">
          <div className="flex justify-between max-h-[254px]">
            <div className="flex flex-col gap-y-6">
              <Logo color="white" />
              <PoppinsText
                text="Long Option 1: Long Long"
                size={20}
                weight="medium"
              />
              <PoppinsText text="Option 2" size={16} weight="normal" />
              <div className="flex space-x-8">
                <Icon name="facebook" onClickWrapper={() => alert("FakeBut")} />
                <Icon
                  name="instagram"
                  onClickWrapper={() => alert("yenTaram")}
                />
                <Icon
                  name="linkedin"
                  onClickWrapper={() => alert("lienkietyen")}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <PoppinsText text="Option 1" size={20} weight="medium" />
              <PoppinsText text="Option 2" size={16} weight="normal" />
              <PoppinsText text="Option 3" size={16} weight="normal" />
            </div>
            <div className="flex flex-col gap-y-6">
              <PoppinsText text="Option 1" size={20} weight="medium" />
              <PoppinsText text="Option 2" size={16} weight="normal" />
              <PoppinsText text="Option 3" size={16} weight="normal" />
            </div>
            <div className="flex flex-col gap-y-6 w-[20%]">
              <PoppinsText text="Maps" size={20} weight="medium" />
              <div className="w-[200px] h-[200px] bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="h-[40px] flex items-end justify-center mb-4">
          <PoppinsText
            text="
                    Copyright Rimel 2022. All right reserved"
            size={14}
            color="white"
            weight="normal"
            textOpacity={0.4}
          />
        </div>
      </div>
    </footer>
  );
};
