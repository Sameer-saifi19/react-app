type Props = {
  children: React.ReactNode;
  className?: string;
};

function Center({ children, className }: Props) {
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}

export default Center;
