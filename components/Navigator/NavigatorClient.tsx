"use client";

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { VehicleMake } from "@/models/vehicleMakesSchema"
import { useRouter } from "next/navigation"

type Params = {
  makeId: string;
  year: string;
};

interface NavigatorClientProps {
  makes: VehicleMake[];
  years: number[];
  params: Params;
}

export function NavigatorClient({
  makes,
  years,
  params,
}: NavigatorClientProps) {
  const router = useRouter();

  const handleMakeChange = (value: string) => {
    router.push(`/result/${value}/${params.year}`);
  };

  const handleYearChange = (value: string) => {
    router.push(`/result/${params.makeId}/${value}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
      {/* Vehicle Make Selector */}
      <div className="flex flex-col space-y-2 w-full md:w-auto">
        <Label htmlFor="vehicle-make">Vehicle Make</Label>
        <Select value={params.makeId} onValueChange={handleMakeChange}>
          <SelectTrigger
            id="vehicle-make"
            className="w-full md:min-w-[200px]"
            aria-label="Vehicle Make"
          >
            <SelectValue placeholder="Select Vehicle Make" />
          </SelectTrigger>
          <SelectContent>
            {makes.map((make) => (
              <SelectItem
                key={make.MakeId.toString()}
                value={make.MakeId.toString()}
              >
                {make.MakeName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model Year Selector */}
      <div className="flex flex-col space-y-2 w-full md:w-auto">
        <Label htmlFor="model-year">Model Year</Label>
        <Select value={params.year} onValueChange={handleYearChange}>
          <SelectTrigger
            id="model-year"
            className="w-full md:min-w-[150px]"
            aria-label="Model Year"
          >
            <SelectValue placeholder="Select Model Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year.toString()} value={year.toString()}>
                {year.toString()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}