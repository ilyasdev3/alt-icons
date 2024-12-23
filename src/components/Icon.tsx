import React, { useState } from "react";
import { IconName } from "../registry";
import { iconRegistry } from "../registry";
import { IconProps } from "../types";

export const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "currentColor",
  className = "",
  onClick,
  stroke,
}) => {
  const currentColor = color;

  const icon = iconRegistry[name as IconName];
  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      strokeWidth={stroke ? stroke : 2}
      stroke={currentColor}
      className={className}
      onClick={onClick}
    >
      {icon.paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
};
