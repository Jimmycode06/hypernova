import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova — Try Your Next Hairstyle with AI",
  description:
    "Nova analyzes your photo, recommends hairstyles for your features, and lets you virtually try cuts, colors, and styles.",
};

export default function NovaLayout({ children }: { children: React.ReactNode }) {
  return <div className="nova-light">{children}</div>;
}
