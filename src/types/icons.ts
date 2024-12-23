export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  onClick?: () => void;
}

interface IconDefinition {
  viewBox: string;
  paths: string[]; // Changed from single path to paths array
}
