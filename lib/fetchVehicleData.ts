import {
	VehicleDataResponseSchema,
	VehicleModel,
} from "../models/vehicleDataSchema"

/**
 * Fetches vehicle models from the VPIC API and validates the response using Zod schema.
 *
 * @param makeId - The ID of the vehicle make.
 * @param modelYear - The model year of the vehicles.
 * @returns {Promise<VehicleModel[]>} - A promise that resolves to an array of VehicleModel objects.
 * @throws {Error} - Throws an error if the fetch operation fails or the data is invalid.
 */
export async function fetchVehicleData(
	makeId: string,
	modelYear: string
): Promise<VehicleModel[]> {
	const API_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelYear}?format=json`

	try {
		const response = await fetch(API_URL)

		if (!response.ok) {
			throw new Error(
				`Failed to fetch vehicle data: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		// Validate the fetched data against the Zod schema
		const parsedData = VehicleDataResponseSchema.safeParse(data)

		if (!parsedData.success) {
			console.error("Validation errors:", parsedData.error.issues)
			throw new Error("Invalid data structure received from API.")
		}

		return parsedData.data.Results
	} catch (error) {
		console.error("Error fetching vehicle data:", error)
		throw error
	}
}
