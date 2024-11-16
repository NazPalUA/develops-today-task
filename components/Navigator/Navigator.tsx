import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { getModalYears } from "@/lib/utils"
import { NavigatorClient } from "./NavigatorClient"

type Params = {
  makeId: string
  year: string
}
export async function Navigator({ params }: { params: Params }) {
	const years = getModalYears(2014)

	const makes = await fetchVehicleMakes()

	return <NavigatorClient params={params} makes={makes} years={years} /> 


}
