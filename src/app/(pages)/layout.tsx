import Footer from "@/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
