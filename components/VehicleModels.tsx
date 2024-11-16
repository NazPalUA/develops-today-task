import VehicleCard from "@/components/VehicleCard"
import { fetchVehicleData } from "@/lib/fetchVehicleData"
import { VehicleModel } from "@/models/vehicleDataSchema"

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

	return (
		<div>
			{models.length > 0 ? (
				models.map(model => <VehicleCard key={model.Model_ID} model={model} />)
			) : (
				<div>No vehicle models found for the selected make and year.</div>
			)}
		</div>
	)
}
