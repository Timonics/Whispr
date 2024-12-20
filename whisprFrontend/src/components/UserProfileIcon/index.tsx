import React from "react";

type UserProfileIconProps = {
  height: number;
  width: number;
  colorHex: string;
  opacity: number;
};

const UserProfileIcon: React.FC<UserProfileIconProps> = ({
  height,
  width,
  colorHex,
  opacity,
}) => {
  //const a = `h-[${height}px] w-[${width}px] opacity-[${opacity}px] text-[#${colorHex}]`
  //console.log(a);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        opacity: opacity / 100,
        color: `#${colorHex}`,
      }}
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
    </svg>
  );
};

export default UserProfileIcon;
