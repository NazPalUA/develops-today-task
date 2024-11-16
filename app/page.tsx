import { Container } from "@/components/Container"
import FilterForm from "@/components/FilterForm"
import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { getModalYears } from "@/lib/utils"

export default async function Home() {
	const years = getModalYears(2014)

	const makes = await fetchVehicleMakes()

	return (
		<Container className="flex-1 flex items-center justify-center">
			<FilterForm makes={makes} years={years} />
		</Container>
	)
}
