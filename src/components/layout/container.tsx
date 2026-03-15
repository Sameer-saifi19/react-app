import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string
};

function Container({ children, className }: Props) {
  return <div className={`container mx-auto px-6 sm:px-10 md:px-12 lg:px-36 ${className}`} >{children}</div>;
}

export default Container;
