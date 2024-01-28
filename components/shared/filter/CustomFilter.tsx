import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stack } from "@/components/ui/stack";
import { updateSearchParams } from "@/lib/utils";
import { CustomFilterType } from "@/types";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CustomFilter = ({
  title,
  options,
  defaultValue,
  queryKey,
  filterType,
}: CustomFilterType) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState(defaultValue);
  const filterName = title.toLowerCase();

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const handleUpdateParams = (e: { value: string }) => {
    const newPathName = updateSearchParams(queryKey, e.value.toLowerCase());

    router.push(newPathName);
  };

  if (filterType === "select") {
    return (
      <Select onValueChange={(value) => console.log(value)}>
        <SelectTrigger className="w-full p-medium-12 tracking-widest">
          <SelectValue placeholder="SORT BY" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.displayValue}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  if (filterType === "button") {
    return (
      <Stack
        header={title}
        headerStyle="p-medium-16 md:p-medium-18 tracking-wide"
        gap={4}
      >
        <div className="h-stack flex-wrap gap-2 w-full justify-center">
          {options.map((option) => (
            <Button
              key={option.value}
              name={option.value}
              variant={"outline"}
              value={selected}
              defaultValue={defaultValue}
              className={
                selected === option.value
                  ? "w-36 border-2 border-black rounded-lg"
                  : selected === "default"
                  ? "w-36 rounded-lg"
                  : "w-36 border-2 border-gray rounded-lg"
              }
              onClick={(e) => {
                const event = { title: filterName, value: option.value };
                setSelected(event.value);
                handleUpdateParams(event);
              }}
            >
              {option.displayValue}
            </Button>
          ))}
        </div>
      </Stack>
    );
  }

  return (
    <Stack
      header={title}
      headerStyle="p-medium-16 md:p-medium-18 tracking-wide"
      gap={4}
    >
      <RadioGroup
        defaultValue={defaultValue}
        value={selected}
        name={filterName}
        onValueChange={(e) => {
          const event = { title: filterName, value: e };
          setSelected(event.value);
          handleUpdateParams(event);
        }}
      >
        {options.map((option) => (
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 mt-1.5">
              <Radio key={option.value} value={option.value}>
                {option.displayValue}
              </Radio>
            </div>
            {option.count && <p className="p-regular-14">({option.count})</p>}
          </div>
        ))}
      </RadioGroup>
    </Stack>
  );
};

export default CustomFilter;
