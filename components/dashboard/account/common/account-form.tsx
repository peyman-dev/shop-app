"use client";

import { FormEvent, useState } from "react";
import { accountDefaultValues } from "../utils/dashboard-data";

const AccountForm = () => {
  const [values, setValues] = useState(accountDefaultValues);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("تغییرات حساب کاربری ذخیره شد.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="block">
        <span className="mb-2 block font-Estedad-ExtraBold! text-neutral-950">
          شماره موبایل <span className="text-red-500">*</span>
        </span>
        <input
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          className="h-12 w-full rounded border border-neutral-300 px-4 text-left outline-none transition focus:border-neutral-950"
        />
      </label>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-Estedad-ExtraBold! text-neutral-950">
            نام <span className="text-red-500">*</span>
          </span>
          <input
            value={values.firstName}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                firstName: event.target.value,
              }))
            }
            className="h-12 w-full rounded border border-neutral-300 px-4 outline-none transition focus:border-neutral-950"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-Estedad-ExtraBold! text-neutral-950">
            نام خانوادگی <span className="text-red-500">*</span>
          </span>
          <input
            value={values.lastName}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                lastName: event.target.value,
              }))
            }
            className="h-12 w-full rounded border border-neutral-300 px-4 outline-none transition focus:border-neutral-950"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-Estedad-ExtraBold! text-neutral-950">
          نام کاربری شما در سایت <span className="text-red-500">*</span>
        </span>
        <input
          value={values.username}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              username: event.target.value,
            }))
          }
          className="h-12 w-full rounded border border-neutral-300 px-4 outline-none transition focus:border-neutral-950"
        />
      </label>

      <label className="block">
        <span className="mb-2 block font-Estedad-ExtraBold! text-neutral-950">
          آدرس ایمیل
        </span>
        <input
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          className="h-12 w-full rounded border border-neutral-300 px-4 text-left outline-none transition focus:border-neutral-950"
        />
      </label>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="h-12 rounded bg-green-600 px-8 font-Estedad-ExtraBold! text-white transition hover:bg-green-700"
        >
          ذخیره تغییرات
        </button>
        {message ? (
          <p className="text-sm font-bold text-green-700">{message}</p>
        ) : null}
      </div>
    </form>
  );
};

export default AccountForm;
