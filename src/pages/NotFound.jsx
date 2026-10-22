import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-16 pb-24 sm:pt-24">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF6B35]">
            404
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#3A2A18]/70">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link to="/" className="text-[#FF6B35] hover:underline">Go to home</Link>
            <Link to="/privacy" className="text-[#FF6B35] hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-[#FF6B35] hover:underline">Terms &amp; Conditions</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
