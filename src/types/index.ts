// src/types/index.ts
export interface IconDefinition {
  viewBox: string;
  path: string;
}

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  onClick?: () => void;
  stroke?: string;
}
