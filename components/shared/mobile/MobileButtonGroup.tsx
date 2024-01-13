export const MobileButtonGroup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="grid grid-cols-2 gap-5 md:hidden">{children}</div>;
};
