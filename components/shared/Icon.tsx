import React from "react";
import Image from "next/image";

interface IconProps {
  path: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ path, alt }) => {
  return <Image src={path} alt={alt} width={24} height={24} />;
};

export default Icon;
