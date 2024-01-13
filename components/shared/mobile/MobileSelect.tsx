import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOptions } from "@/types";

type MobileSelectProps = {
  options: SelectOptions[];
};

const MobileSelect = ({ options }: MobileSelectProps) => {
  return (
    <Select>
      <SelectTrigger className="w-full p-medium-12 tracking-widest">
        <SelectValue placeholder="SORT BY" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MobileSelect;
