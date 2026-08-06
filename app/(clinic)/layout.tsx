import { ClinicFooter } from "@/components/clinic/ClinicFooter";
import { ClinicHeader } from "@/components/clinic/ClinicHeader";
import { CdcpBanner } from "@/components/clinic/CdcpBanner";
import { ChatWidget } from "@/components/clinic/ChatWidget";

export default function ClinicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-clinic flex min-h-dvh flex-col bg-[var(--clinic-bg)] text-[var(--clinic-text)]">
      <ClinicHeader />
      <main className="flex-1">{children}</main>
      <ClinicFooter />
      <CdcpBanner />
      <ChatWidget />
    </div>
  );
}
