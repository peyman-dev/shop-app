import DashboardSidebar from "./dashboard-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container py-8 md:py-10">
      <div className="flex gap-10 flex-col md:flex-row">
        <section className="min-h-[360px] w-full lg:order-1">{children}</section>
        <DashboardSidebar />
      </div>
    </main>
  );
};

export default DashboardLayout;
