import React from "react";
interface Line3Props {
    wrapperClassName?: string;
}

export const Line3 = ({wrapperClassName = ""}: Line3Props) => {
  return (
    <div className={wrapperClassName}>
      <div className="w-full opacity-30 border-[0.5px] border-black"></div>
    </div>
  ); /* Line 3 */
};
/* Vector */
