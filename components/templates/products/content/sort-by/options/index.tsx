"use client";
import {
  sortOptions,
} from "./settings/options";
import Option from "./option";

const SortOptions = () => {
  return (
    <>
      {sortOptions.map((sort) => (
        <Option {...sort} key={sort.id} />
      ))}
    </>
  );
};

export default SortOptions;
