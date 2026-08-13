import Link from "next/link";
import DashboardAlert from "../common/dashboard-alert";
import DashboardLayout from "../common/dashboard-layout";

const OrdersPage = () => {
  return (
    <DashboardLayout>
      <DashboardAlert>
        هیچ سفارشی هنوز ثبت نشده است.
        <Link href="/products" className="mr-2 text-neutral-950 underline">
          مرور محصولات
        </Link>
      </DashboardAlert>
    </DashboardLayout>
  );
};

export default OrdersPage;
