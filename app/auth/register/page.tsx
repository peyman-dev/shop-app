import AuthField from "@/components/templates/auth/common/auth-field";
import AuthSubmitButton from "@/components/templates/auth/common/auth-submit-button";
import Link from "next/link";

const registerPage = () => {
  return (
    <>
      <main className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <AuthField id="register-first-name" label="نام" />
          <AuthField id="register-last-name" label="نام خانوادگی" />
        </div>
        <AuthField
          id="register-phone"
          label="شماره موبایل"
          placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷"
        />
        <AuthField id="register-password" label="گذرواژه" type="password" />
        <Link
          href="/auth/login"
          className="block text-center text-xs font-bold text-neutral-950 underline"
        >
          قبلا حساب ساخته‌اید؟ وارد شوید
        </Link>
      </main>
      <footer>
        <AuthSubmitButton>ثبت‌نام و ورود</AuthSubmitButton>
      </footer>
    </>
  );
};

export default registerPage;
