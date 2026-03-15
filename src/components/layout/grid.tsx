type Props = {
  children: React.ReactNode;
  className?: string
};

function Grid({ children, className }: Props) {
  return <div className={`grid gap-6 md lg:grid-cols-12 ${className}`} >{children}</div>;
}

export default Grid
