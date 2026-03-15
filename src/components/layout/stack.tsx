type Props = {
  children: React.ReactNode;
  className?: string;
};

function Stack({ children, className }: Props) {
  return <div className={`flex flex-col gap-6 ${className}`}>{children}</div>;
}

export default Stack;
