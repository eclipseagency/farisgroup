import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(26,58,107,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-white">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-gray-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "#c9a227" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {subtitle && (
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5"
            style={{
              color: "#c9a227",
              backgroundColor: "rgba(201,162,39,0.15)",
              border: "1px solid rgba(201,162,39,0.3)",
            }}
          >
            {subtitle}
          </span>
        )}
        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-gray-300 mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
