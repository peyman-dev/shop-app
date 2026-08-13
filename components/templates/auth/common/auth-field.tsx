const AuthField = ({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-Estedad-ExtraBold! text-neutral-950">
        {label}
      </span>
      <input
        id={id}
        type={type}
        dir={type === "password" ? "ltr" : "rtl"}
        placeholder={placeholder}
        className="h-12 w-full rounded border border-neutral-200 bg-white px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
      />
    </label>
  );
};

export default AuthField;
