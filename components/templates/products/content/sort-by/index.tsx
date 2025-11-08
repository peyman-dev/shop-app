import Divider from "@/components/ui/divider";
import { ArrowDownWideNarrow } from "lucide-react";
import React from "react";
import SortOptions from "./options";

const SortBy = () => {
  return (
    <div className="**:flex-ic mb-6 flex-ic gap-3 **:gap-1.5 text-sm">
      <div>
        <ArrowDownWideNarrow className="size-4" />
        <span>مرتب سازی:</span>
      </div>
      <Divider />
      <SortOptions />
    </div>
  );
};

export default SortBy;
