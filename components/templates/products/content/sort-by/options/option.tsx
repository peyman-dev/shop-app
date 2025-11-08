import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { sortOptions } from "./settings/options";

const Option = ({
  id,
  value,
  label,
}: {
  id: string;
  value: number;
  label: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSortStr = searchParams.get("sort");
  const sortOpt = currentSortStr ? Number(currentSortStr) : 0;

  let activeSortNum = 0;
  if (sortOpt && !isNaN(sortOpt)) {
    const found = sortOptions.find((srt) => srt.value === sortOpt);
    if (found) {
      activeSortNum = found.value;
    }
  }


  const sortOptClass = clsx(
    "select-none text-neutral-500 text-sm!",
    activeSortNum === value ? "font-bold! text-blue-500!" : ""
  );

  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set("sort", value.toString());
  const newUrl = `${pathname}${
    newSearchParams.toString() ? `?${newSearchParams.toString()}` : ""
  }`;

  return (
    <Link className={sortOptClass} href={newUrl}>
      {label}
    </Link>
  );
};

export default Option;
