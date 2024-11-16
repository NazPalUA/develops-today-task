import VehicleCard from "@/components/VehicleCard"
import { fetchVehicleData } from "@/lib/fetchVehicleData"
import { VehicleModel } from "@/models/vehicleDataSchema"
import NoModels from "./NoModels"

interface ResultPageProps {
	params: {
		makeId: string
		year: string
	}
}

export default async function VehicleModels({ params }: ResultPageProps) {
	const { makeId, year } = params
	let models: VehicleModel[] = []

	models = await fetchVehicleData(makeId, year)

	if (models.length === 0) {
		return <NoModels />
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{models.map(model => (
				<VehicleCard key={model.Model_ID} model={model} />
			))}
		</div>
	)
}
