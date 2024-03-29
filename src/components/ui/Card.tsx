export default function ({
  children,
  className,
}: {
  children: JSX.Element;
  className: string | undefined;
}) {
  return <div className={`rounded-md shadow-md hover:shadow-lg ${className}`}>{children}</div>;
}
