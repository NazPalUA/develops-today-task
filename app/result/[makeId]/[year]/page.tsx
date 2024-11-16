import VehicleModels from "@/components/VehicleModels"
import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { Suspense } from "react"

interface ResultPageProps {
	params: {
		makeId: string
		year: string
	}
}

export async function generateStaticParams() {
	const makes = await fetchVehicleMakes()
	const currentYear = new Date().getFullYear()
	const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
		(2015 + i).toString()
	)

	const paths = []

	for (const make of makes) {
		for (const year of years) {
			paths.push({ makeId: make.MakeId.toString(), year })
		}
	}

	return paths
}

export default async function ResultPage({
	params: { makeId, year },
}: ResultPageProps) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
			<h1 className="text-3xl font-bold mb-6">Vehicle Models</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<VehicleModels params={{ makeId, year }} />
			</Suspense>
		</div>
	)
}
