import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Background from "./components/Background";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-sm md:text-base">
        <Background />
        <Nav />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
