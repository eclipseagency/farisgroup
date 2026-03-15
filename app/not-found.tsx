import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="text-center text-white px-4">
        <div
          className="font-heading font-black text-9xl mb-4 leading-none"
          style={{ color: "#F47B20" }}
        >
          404
        </div>
        <h1 className="font-heading font-bold text-3xl mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to our
          sports solutions.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#F47B20" }}
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
