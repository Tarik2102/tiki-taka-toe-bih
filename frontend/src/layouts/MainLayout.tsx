import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
