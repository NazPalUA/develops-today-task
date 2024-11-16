import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { getModalYears } from "@/lib/utils"
import { SelectField } from "./SelectField"
import { SubmitButton } from "./SubmitButton"

export async function FilterForm() {
	const years = getModalYears(2014)

	const makes = await fetchVehicleMakes()

	return (
		<>
			<SelectField
				label="Vehicle Make"
				makes={makes}
				years={years}
				variant="make"
			/>

			<SelectField
				label="Model Year"
				makes={makes}
				years={years}
				variant="year"
			/>

			<SubmitButton makes={makes} years={years} />
		</>
	)
}
