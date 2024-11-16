"use client"

import { VehicleMake } from "@/models/vehicleMakesSchema"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface FilterFormProps {
	makes: VehicleMake[]
	years: number[]
}

export function useSelect({ makes, years }: FilterFormProps) {
	const router = useRouter()
	const [selectedMake, setSelectedMake] = useState<string>("")
	const [selectedYear, setSelectedYear] = useState<string>("")

	// Initialize state from URL search params on client side
	useEffect(() => {
		if (typeof window === "undefined") return

		const searchParams = new URLSearchParams(window.location.search)
		const makeParam = searchParams.get("make") || ""
		const yearParam = searchParams.get("year") || ""

		// Validate and set 'make'
		const isValidMake = makes.some(make => make.MakeId.toString() === makeParam)
		if (isValidMake) {
			setSelectedMake(makeParam)
		} else if (makeParam) {
			searchParams.delete("make")
			router.replace(`${window.location.pathname}?${searchParams.toString()}`, {
				scroll: false,
			})
		}

		// Validate and set 'year'
		const isValidYear = years.includes(parseInt(yearParam))
		if (isValidYear) {
			setSelectedYear(yearParam)
		} else if (yearParam) {
			searchParams.delete("year")
			router.replace(`${window.location.pathname}?${searchParams.toString()}`, {
				scroll: false,
			})
		}
	}, [makes, years, router])

	// Update URL when selections change
	useEffect(() => {
		if (typeof window === "undefined") return

		const params = new URLSearchParams(window.location.search)

		if (selectedMake) {
			params.set("make", selectedMake)
		} else {
			params.delete("make")
		}

		if (selectedYear) {
			params.set("year", selectedYear)
		} else {
			params.delete("year")
		}

		router.replace(`${window.location.pathname}?${params.toString()}`, {
			scroll: false,
		})
	}, [selectedMake, selectedYear, router])

	return { selectedMake, selectedYear, setSelectedMake, setSelectedYear }
}
