import DashboardLayout from "../common/dashboard-layout";
import EmptyState from "../common/empty-state";

const WishlistPage = () => {
  return (
    <DashboardLayout>
      <EmptyState
        title="لیست خالی می‌‌باشد !"
        description="شما هنوز کالایی به لیست دلخواه خود اضافه نکرده‌اید. محصولات ما را می‌توانید در صفحه فروشگاه مشاهده نمایید."
        actionLabel="بازگشت به صفحه فروشگاه"
        actionHref="/products"
      />
    </DashboardLayout>
  );
};

export default WishlistPage;
