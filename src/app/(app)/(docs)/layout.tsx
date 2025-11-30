export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto md:max-w-3xl 2xl:max-w-5xl">{children}</div>;
}
