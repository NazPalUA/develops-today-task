import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VehicleModel } from "@/models/vehicleDataSchema"

export default async function VehicleCard({ model }: { model: VehicleModel }) {
	return (
		<Card
			key={`${model.Make_ID}-${model.Model_ID}`}
			className="hover:shadow-lg transition-shadow duration-300"
		>
			<CardHeader>
				<CardTitle className="text-lg font-semibold">
					{model.Model_Name}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Badge variant="secondary" className="mb-2">
					{model.Make_Name}
				</Badge>
				<p className="text-sm text-muted-foreground">
					Model ID: {model.Model_ID}
				</p>
			</CardContent>
		</Card>
	)
}
