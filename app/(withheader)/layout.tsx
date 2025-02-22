import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow w-full ">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
