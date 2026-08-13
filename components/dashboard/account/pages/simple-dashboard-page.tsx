import DashboardLayout from "../common/dashboard-layout";
import EmptyState from "../common/empty-state";

const SimpleDashboardPage = ({ title }: { title: string }) => {
  return (
    <DashboardLayout>
      <EmptyState
        title={title}
        description="برای این بخش هنوز داده‌ای ثبت نشده است."
        actionLabel="بازگشت به پیشخوان"
        actionHref="/profile/me"
      />
    </DashboardLayout>
  );
};

export default SimpleDashboardPage;
