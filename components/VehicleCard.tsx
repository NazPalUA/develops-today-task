import { VehicleModel } from "@/models/vehicleDataSchema"

export default async function VehicleCard({ model }: { model: VehicleModel }) {
	return (
		<div
			key={model.Model_ID}
			className="w-full max-w-xl bg-white shadow rounded p-4 mb-4"
		>
			<h2 className="text-xl font-semibold">{model.Model_Name}</h2>
			<p className="text-gray-600">Make: {model.Make_Name}</p>
		</div>
	)
}
