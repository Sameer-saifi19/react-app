type Props = {
  children: React.ReactNode;
  className?: string
};

function Section({ children, className }: Props) {
  return <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`} >{children}</div>;
}

export default Section;
