import Link from "next/link";

const links = [
  { label: "Privacy", href: "/projects/nova/privacy-policy" },
  { label: "Terms of Use", href: "/projects/nova/terms" },
  { label: "Support", href: "/projects/nova/support" },
  { label: "Manage my data", href: "/projects/nova/data-request" },
];

export default function NovaFooterLinks() {
  return (
    <nav aria-label="Nova legal and support links" className="mt-16 border-t border-[#4b2c55]/10 pt-8">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-[#716376] transition-colors hover:text-[#b83eb4]">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
