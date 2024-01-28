import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SpinnerLoader from "@/components/ui/loading-spinner";
import { Suspense } from "react";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Suspense fallback={<SpinnerLoader />}>
        <main className="flex-1">{props.children}</main>
      </Suspense>
      <Footer />
    </div>
  );
}
