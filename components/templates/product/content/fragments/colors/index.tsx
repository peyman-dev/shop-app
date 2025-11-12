"use client";
import { Tooltip } from "@mantine/core";
import clsx from "clsx";
import { RefreshCcw, StepBack } from "lucide-react";
import React from "react";
const colors = [
  {
    id: 1,
    title: "قرمز",
    colorCode: "#FF0000",
  },
  {
    id: 2,
    title: "آبی",
    colorCode: "#0000FF",
  },
  {
    id: 3,
    title: "سبز",
    colorCode: "#008000",
  },
  {
    id: 4,
    title: "مشکی",
    colorCode: "#000000",
  },
  {
    id: 5,
    title: "سفید",
    colorCode: "#FFFFFF",
  },
  {
    id: 6,
    title: "زرد",
    colorCode: "#FFFF00",
  },
  {
    id: 7,
    title: "بنفش",
    colorCode: "#800080",
  },
  {
    id: 8,
    title: "نارنجی",
    colorCode: "#FFA500",
  },
  {
    id: 9,
    title: "خاکستری",
    colorCode: "#808080",
  },
  {
    id: 10,
    title: "قهوه‌ای",
    colorCode: "#A52A2A",
  },
];

const Colors = () => {
  const [selectedColor, setSelectedColor] = React.useState(colors[0].colorCode);

  const clearSelected = () => setSelectedColor("");

  return (
    <div>
      <p>انتخاب رنگ:</p>
      <div className="flex-ic gap-5">
        <div id="color-items" className="flex-ic flex-wrap gap-3 mt-3">
          {colors.map((color) => (
            <Tooltip offset={6} key={color.id} label={color.title} withArrow>
              <button
                onClick={() => setSelectedColor(color.colorCode)}
                className={clsx(
                  `size-7 rounded-full border opacity-80 text-white`,
                  selectedColor == color.colorCode
                    ? "ring-3 ring-offset-1 opacity-100 ring-black"
                    : "border-gray-300"
                )}
                style={{ backgroundColor: color.colorCode }}
              />
            </Tooltip>
          ))}
        </div>
        <div>
          {selectedColor && (
            <button
              onClick={clearSelected}
              className="flex-ic gap-1 text-primary/60"
            >
              <RefreshCcw className="size-4" />
              <span>پاک‌سازی</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colors;
