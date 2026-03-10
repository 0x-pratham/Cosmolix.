import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "CosmoWork", href: "/products/cosmowork" },
    { label: "CosmoAnalytics", href: "/products/cosmoanalytics" },
    { label: "CosmoCyber", href: "/products/cosmocyber" },
  ],
  Connect: [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cosmolix-pvt-ltd/", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/cosmolix.in/", icon: Instagram}
],
};

const Footer = () => (
  <footer className="relative border-t border-border/50 bg-background overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
  src="https://i.ibb.co/Kp4P1Q5p/CX-logo-page-0003.png"
  alt="Cosmolix"
  className="h-12 w-auto object-contain"
/>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Building scalable AI-driven software and SaaS platforms for enterprises and innovators.
          </p>

          <div className="mt-6">

<p className="text-sm font-medium text-foreground mb-3">
Subscribe for updates
</p>

<div className="flex items-center gap-3">

<input
type="email"
placeholder="Your email"
className="w-full px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary"
/>

<button
className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-md transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
>
Join
</button>

</div>

</div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
  {links.map((l) => {
    const Icon = (l as any).icon

    return (
      <li key={l.label}>
        <Link
          to={l.href}
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {Icon && <Icon size={16} />}
          {l.label}
        </Link>
      </li>
    )
  })}
</ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cosmolix Pvt Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
<Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
<Link to="/terms" className="hover:text-primary transition">Terms</Link>
</div>
        <p className="text-xs text-muted-foreground">
          Powering the future with intelligent systems.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
