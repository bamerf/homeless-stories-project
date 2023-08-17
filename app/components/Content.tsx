export const Content = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`max-w-[720px] ${className}`}>{children}</div>;
