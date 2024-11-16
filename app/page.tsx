import FilterForm from "@/components/FilterForm"
import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { VehicleMake } from "@/models/vehicleMakesSchema"

const START_YEAR = 2014

export default async function Home() {
	const currentYear = new Date().getFullYear()
	const years = Array.from(
		{ length: currentYear - START_YEAR },
		(_, i) => currentYear - i
	)

	let makes: VehicleMake[] = []

	makes = await fetchVehicleMakes()

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
			<h1 className="text-4xl font-bold mb-8">Car Dealer App</h1>

			<div className="w-full max-w-md space-y-6">
				<FilterForm makes={makes} years={years} />
			</div>
		</div>
	)
}
