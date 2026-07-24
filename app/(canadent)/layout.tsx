import { SiteFooter } from "@/components/canadent/SiteFooter";
import { SiteHeader } from "@/components/canadent/SiteHeader";

export default function CanadentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-canadent flex min-h-dvh flex-col bg-[var(--cd-bg)] text-[var(--cd-text)]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
