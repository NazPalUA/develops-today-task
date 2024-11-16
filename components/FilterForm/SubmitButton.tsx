"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VehicleMake } from "@/models/vehicleMakesSchema"
import Link from "next/link"
import { useSelect } from "./hooks/useSelect"

interface FilterFormProps {
	makes: VehicleMake[]
	years: number[]
}

export function SubmitButton({ makes, years }: FilterFormProps) {
	const { selectedMake, selectedYear } = useSelect({ makes, years })

	return (
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
	)
}
