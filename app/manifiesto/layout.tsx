import { Header } from '@/components/layout';

export default function ManifiestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header forceScrolled={true} />
      {children}
    </>
  );
}
