"use client";

import { Category } from "@prisma/client";

import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

const iconMap: Record<Category["name"], IconType> = {
  // prettier-ignore
  "Music": FcMusic,
  // prettier-ignore

  "Photography": FcOldTimeCamera,
  // prettier-ignore

  "Fitness": FcSportsMode,
  // prettier-ignore

  "Accouting": FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  // prettier-ignore

  "Filming": FcFilmReel,
  // prettier-ignore

  "Engineering": FcEngineering,
};

interface CategoriesProps {
  items: Category[];
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
