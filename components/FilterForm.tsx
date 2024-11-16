"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { VehicleMake } from "@/models/vehicleMakesSchema"
import Link from "next/link"
import { useState } from "react"

interface FilterFormProps {
	makes: VehicleMake[]
	years: number[]
}

export default function FilterForm({ makes, years }: FilterFormProps) {
	const [selectedMake, setSelectedMake] = useState("")
	const [selectedYear, setSelectedYear] = useState("")

	return (
		<>
			{/* Vehicle Make Selector */}
			<div className="flex flex-col space-y-2">
				<Label htmlFor="vehicle-make">Vehicle Make</Label>
				<Select
					value={selectedMake}
					onValueChange={value => setSelectedMake(value)}
				>
					<SelectTrigger id="vehicle-make" className="w-full">
						<SelectValue placeholder="Select Vehicle Make" />
					</SelectTrigger>
					<SelectContent>
						{makes.map(make => (
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
			<div className="flex flex-col space-y-2">
				<Label htmlFor="model-year">Model Year</Label>
				<Select
					value={selectedYear}
					onValueChange={value => setSelectedYear(value)}
				>
					<SelectTrigger id="model-year" className="w-full">
						<SelectValue placeholder="Select Model Year" />
					</SelectTrigger>
					<SelectContent>
						{years.map(year => (
							<SelectItem key={year.toString()} value={year.toString()}>
								{year.toString()}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Next Button */}
			<Link
				href={
					selectedMake && selectedYear
						? `/result/${selectedMake}/${selectedYear}`
						: "#"
				}
				passHref
			>
				<Button
					disabled={!selectedMake || !selectedYear}
					className={`w-full mt-5 ${
						!selectedMake || !selectedYear
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-blue-700"
					}`}
				>
					Next
				</Button>
			</Link>
		</>
	)
}
