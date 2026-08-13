import DashboardActionCard from "../common/dashboard-action-card";
import DashboardAlert from "../common/dashboard-alert";
import DashboardLayout from "../common/dashboard-layout";
import { dashboardActionCards } from "../utils/dashboard-data";

const DashboardHomePage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-7">
        <div className="flex items-center justify-between border-b border-dashed border-neutral-200 pb-4">
          <h1 className="font-Estedad-ExtraBold! text-neutral-950">
            به پیشخوان کاربری خود خوش آمدید.
          </h1>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {dashboardActionCards.map((item) => (
            <DashboardActionCard {...item} key={item.label} />
          ))}
        </div>
        <DashboardAlert>هیچ سفارشی هنوز ثبت نشده است.</DashboardAlert>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHomePage;
