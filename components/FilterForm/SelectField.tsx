"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { VehicleMake } from "@/models/vehicleMakesSchema"
import { Label } from "../ui/label"
import { useSelect } from "./hooks/useSelect"

interface SelectFieldProps {
	makes: VehicleMake[]
	years: number[]
	label: string
	variant: "make" | "year"
}

export function SelectField({
	makes,
	years,
	label,
	variant,
}: SelectFieldProps) {
	const { selectedMake, selectedYear, setSelectedMake, setSelectedYear } =
		useSelect({ makes, years })

	return (
		<div className="flex flex-col space-y-2">
			<Label htmlFor={label}>{label}</Label>
			<Select
				value={variant === "make" ? selectedMake : selectedYear}
				onValueChange={value =>
					variant === "make" ? setSelectedMake(value) : setSelectedYear(value)
				}
			>
				<SelectTrigger
					id={variant === "make" ? "vehicle-make" : "model-year"}
					className="w-full"
					aria-label={variant === "make" ? "Vehicle Make" : "Model Year"}
				>
					<SelectValue
						placeholder={
							variant === "make" ? "Select Vehicle Make" : "Select Model Year"
						}
					/>
				</SelectTrigger>
				<SelectContent>
					{variant === "make" &&
						makes.map(make => (
							<SelectItem
								key={make.MakeId.toString()}
								value={make.MakeId.toString()}
							>
								{make.MakeName}
							</SelectItem>
						))}
					{variant === "year" &&
						years.map(year => (
							<SelectItem key={year.toString()} value={year.toString()}>
								{year.toString()}
							</SelectItem>
						))}
				</SelectContent>
			</Select>
		</div>
	)
}
