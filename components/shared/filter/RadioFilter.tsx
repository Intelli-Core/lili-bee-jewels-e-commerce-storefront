import { jost } from "@/lib/fonts";
import { FilterProps } from "@/types";
import mapFiltersToItems from "@/utils/mapFiltersToItems";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";

const RadioFilter = ({
  filters,
  filterKey,
  value,
  getFilterArray,
  getDisplayValue,
  filterCounts,
}: FilterProps) => {
  return (
    <RadioGroup
      defaultValue="none"
      name={`${filterKey}-${value}`}
      key={filterKey}
    >
      {mapFiltersToItems(
        filters,
        filterKey,
        getFilterArray,
        getDisplayValue,
        filterCounts
      ).map(({ uniqueId, displayValue, itemCount }) => (
        <div
          className="flex justify-between items-center"
          key={uniqueId}
        >
          <div className="flex items-center space-x-2 mt-1.5">
            <RadioGroupItem
              value={uniqueId}
              id={uniqueId}
              className="size-5 md:size-6"
            />
            <Label
              htmlFor={uniqueId}
              className={`${jost.className} p-regular-16 md:p-regular-14 text-gray-900`}
            >
              {displayValue}
            </Label>
          </div>
          <p
            className={`${jost.className} p-regular-16 md:p-regular-14 text-gray-900 pr-2.5`}
          >
            ({itemCount.toString()})
          </p>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioFilter;
