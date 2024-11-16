"use client"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { VehicleMake } from "@/models/vehicleMakesSchema"
import { Sparkles } from "lucide-react"
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
		<Card className="w-full max-w-md bg-background/80 backdrop-blur-sm">
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					Find Your Perfect Car
					<Sparkles className="h-5 w-5 text-primary animate-ping" />
				</CardTitle>
				<CardDescription>
					Select vehicle make and model year to start your search
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-8">
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
				<Button
					asChild
					disabled={!selectedMake || !selectedYear}
					className={cn("w-full mt-5", {
						"opacity-50 cursor-not-allowed": !selectedMake || !selectedYear,
						"hover:bg-blue-700": selectedMake && selectedYear,
					})}
				>
					<Link
						href={
							selectedMake && selectedYear
								? `/result/${selectedMake}/${selectedYear}`
								: "#"
						}
					>
						Next
					</Link>
				</Button>
			</CardContent>
		</Card>
	)
}
